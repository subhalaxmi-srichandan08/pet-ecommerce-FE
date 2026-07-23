import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";
import { FaPaw, FaShoppingCart, FaUser } from "react-icons/fa";

import authService from "../../services/authService";
import useAuthStore from "../../store/authStore";

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

    const capitalizeFirstLetter = str => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

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

                <div className="nav-icons">

                    <FaShoppingCart
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/cart")}
                    />

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