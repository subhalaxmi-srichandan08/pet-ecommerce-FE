import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";
import { FaPaw, FaShoppingCart, FaUser } from "react-icons/fa";
import {
    BsCart3
} from "react-icons/bs";

import authService from "../../services/authService";
import useAuthStore from "../../store/authStore";

import useCartStore from "../../store/cartStore";

import { useEffect, useState } from "react";

function Navbar() {
    const navigate = useNavigate();

    const user = useAuthStore(state => state.user);
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    const logoutStore = useAuthStore(state => state.logout);

    const handleLogout = async () => {
        try {
            await authService.logout();
        } catch (error) {
            console.log(error);
        } finally {
            logoutStore();
            navigate("/", { replace: true });
        }
    };

    const [search, setSearch] = useState("");
    const handleSearch = e => {

        e.preventDefault();

        const value = search.trim();

        if (!value)
            return navigate("/products");

        navigate(
            `/products?search=${encodeURIComponent(value)}`
        );

    };

    const capitalizeFirstLetter = str => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const count = useCartStore(state => state.count);
    const fetchCart = useCartStore(state => state.fetchCart);

    useEffect(() => {

        if (isAuthenticated) {

            fetchCart();

        }

    }, [isAuthenticated]);

    return (
        <header className="navbar">

            <div className="container navbar-container">

                <Link to="/" className="logo">
                    <FaPaw />
                    PawPoint
                </Link>

                <nav>

                    <Link to="/">Home</Link>

                    <Link to="/products?pet=Dog">
                        Dogs
                    </Link>

                    <Link to="/products?pet=Cat">
                        Cats
                    </Link>

                    <Link to="/products">
                        Products
                    </Link>

                    {/* Uncomment after creating these pages */}

                    {/*
                    <Link to="/about">
                        About
                    </Link>

                    <Link to="/contact">
                        Contact
                    </Link>
                    */}

                </nav>
                <form
                    className="navbar-search"
                    onSubmit={handleSearch}
                >

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={e =>
                            setSearch(e.target.value)
                        }
                    />

                    <button type="submit">
                        Search
                    </button>

                </form>
                <div className="nav-icons">

                    <div
                        style={{
                            position: "relative",
                            cursor: "pointer"
                        }}
                        onClick={() => navigate("/cart")}
                    >

                        <BsCart3 />

                        {count > 0 && (

                            <span
                                style={{
                                    position: "absolute",
                                    top: -10,
                                    right: -10,
                                    background: "red",
                                    color: "#fff",
                                    borderRadius: "50%",
                                    width: 18,
                                    height: 18,
                                    fontSize: 11,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                {count}
                            </span>

                        )}

                    </div>

                    {isAuthenticated ? (

                        <div className="user-section">

                            <span className="user-name">

                                <FaUser />

                                {capitalizeFirstLetter(user?.firstName)}

                            </span>

                            <button
                                className="nav-logout-btn"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>

                        </div>

                    ) : (

                        <>

                            <span
                                onClick={() => navigate("/login")}
                                style={{
                                    cursor: "pointer",
                                    fontSize: "16px",
                                    fontWeight: "600",
                                }}
                            >
                                Login
                            </span>

                            <span
                                onClick={() => navigate("/register")}
                                style={{
                                    cursor: "pointer",
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    color: "#2d6cdf",
                                }}
                            >
                                Register
                            </span>

                        </>

                    )}

                </div>

            </div>

        </header>
    );
}

export default Navbar;