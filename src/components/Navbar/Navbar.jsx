import "./Navbar.css";

import {
    Link,
    useNavigate,
    useLocation
} from "react-router-dom";

import {
    FaPaw,
    FaUser
} from "react-icons/fa";

import {
    BsCart3
} from "react-icons/bs";

import {
    FiSearch,
    FiX
} from "react-icons/fi";

import authService from "../../services/authService";
import useAuthStore from "../../store/authStore";
import useCartStore from "../../store/cartStore";

import {
    useEffect,
    useState
} from "react";

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const user = useAuthStore(
        state => state.user
    );

    const isAuthenticated = useAuthStore(
        state => state.isAuthenticated
    );

    const logoutStore = useAuthStore(
        state => state.logout
    );

    const count = useCartStore(
        state => state.count
    );

    const fetchCart = useCartStore(
        state => state.fetchCart
    );

    const [search, setSearch] = useState(() => {

        const params =
            new URLSearchParams(
                window.location.search
            );

        return params.get("search") || "";

    });

    useEffect(() => {

        const params =
            new URLSearchParams(
                location.search
            );

        setSearch(
            params.get("search") || ""
        );

    }, [location.search]);

    useEffect(() => {

        if (isAuthenticated) {
            fetchCart();
        }

    }, [isAuthenticated, fetchCart]);

    const handleLogout = async () => {

        try {

            await authService.logout();

        } catch (error) {

            console.error(error);

        } finally {

            logoutStore();

            navigate(
                "/",
                {
                    replace: true
                }
            );

        }

    };

    const handleSearch = e => {

        e.preventDefault();

        const keyword =
            search.trim();

        const params =
            new URLSearchParams();

        if (keyword) {

            params.set(
                "search",
                keyword
            );

        }

        navigate(
            `/products?${params.toString()}`
        );

    };

    const clearSearch = () => {

        setSearch("");

        navigate("/products");

    };

    const capitalizeFirstLetter = str => {

        if (!str) return "";

        return (
            str.charAt(0).toUpperCase() +
            str.slice(1)
        );

    };

    return (

        <header className="navbar">

            <div className="container navbar-container">

                {/* =========================
                    LOGO
                ========================== */}

                <Link
                    to="/"
                    className="logo"
                >

                    <span className="logo-icon">
                        <FaPaw />
                    </span>

                    <span className="logo-text">
                        PawPoint
                    </span>

                </Link>


                {/* =========================
                    NAVIGATION
                ========================== */}

                <nav className="navbar-nav">

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/products?pet=Dog">
                        Dogs
                    </Link>

                    <Link to="/products?pet=Cat">
                        Cats
                    </Link>

                    <Link to="/products">
                        Products
                    </Link>

                    <Link to="/wishlist">
                        Wishlist
                    </Link>

                </nav>


                {/* =========================
                    SEARCH
                ========================== */}

                <form
                    className="navbar-search"
                    onSubmit={handleSearch}
                >

                    <FiSearch
                        className="search-icon"
                    />

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={e =>
                            setSearch(
                                e.target.value
                            )
                        }
                    />

                    {search && (

                        <button
                            type="button"
                            className="search-clear"
                            onClick={
                                clearSearch
                            }
                            aria-label="Clear search"
                        >

                            <FiX />

                        </button>

                    )}

                    <button
                        type="submit"
                        className="search-submit"
                    >
                        Search
                    </button>

                </form>


                {/* =========================
                    ACTIONS
                ========================== */}

                <div className="navbar-actions">

                    {/* Cart */}

                    <button
                        type="button"
                        className="cart-button"
                        onClick={() =>
                            navigate("/cart")
                        }
                        aria-label="Shopping cart"
                    >

                        <BsCart3 />

                        {count > 0 && (

                            <span className="cart-count">
                                {count}
                            </span>

                        )}

                    </button>


                    {/* User */}

                    {isAuthenticated ? (

                        <div className="user-section">

                            <button
                                type="button"
                                className="user-button"
                                onClick={() =>
                                    navigate(
                                        "/profile"
                                    )
                                }
                            >

                                <span className="user-avatar">

                                    {user?.avatar ? (

                                        <img
                                            src={user.avatar}
                                            alt={
                                                user.firstName
                                            }
                                        />

                                    ) : (

                                        <FaUser />

                                    )}

                                </span>

                                <span className="user-name">

                                    {capitalizeFirstLetter(
                                        user?.firstName
                                    )}

                                </span>

                            </button>

                            <button
                                type="button"
                                className="nav-logout-btn"
                                onClick={
                                    handleLogout
                                }
                            >
                                Logout
                            </button>

                        </div>

                    ) : (

                        <div className="auth-actions">

                            <button
                                type="button"
                                className="login-button"
                                onClick={() =>
                                    navigate(
                                        "/login"
                                    )
                                }
                            >
                                Login
                            </button>

                            <button
                                type="button"
                                className="register-button"
                                onClick={() =>
                                    navigate(
                                        "/register"
                                    )
                                }
                            >
                                Register
                            </button>

                        </div>

                    )}

                </div>

            </div>

        </header>

    );

}

export default Navbar;