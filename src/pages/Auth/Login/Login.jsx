import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaEye,
    FaEyeSlash,
    FaEnvelope,
    FaLock,
    FaPaw,
} from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

import "./Login.css";

import authService from "../../../services/authService";
import { validateLogin } from "../../../utils/validators";

const initialState = {
    email: "",
    password: "",
};

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState(initialState);

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [rememberMe, setRememberMe] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;

        const updatedForm = {
            ...form,
            [name]: value,
        };

        setForm(updatedForm);

        setErrors(validateLogin(updatedForm));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const validation = validateLogin(form);

        if (Object.keys(validation).length) {

            setErrors(validation);

            return;

        }

        try {

            setLoading(true);

            const response = await authService.login(form);

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            toast.success(response.message);

            navigate("/");

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Login failed."

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <section className="login-page">

            <div className="login-left">

                <FaPaw className="paw-icon" />

                <h1>PawPoint</h1>

                <h2>Welcome Back ❤️</h2>

                <p>

                    Login to continue shopping
                    premium food, toys and accessories
                    for your lovely pets.

                </p>

                <ul>

                    <li>✔ Secure Authentication</li>

                    <li>✔ Fast Checkout</li>

                    <li>✔ Track Orders</li>

                </ul>

            </div>

            <div className="login-right">

                <form
                    className="login-card"
                    onSubmit={handleSubmit}
                >

                    <h2>Sign In</h2>

                    <p className="subtitle">

                        Welcome back! Please login
                        to continue.

                    </p>

                    <div>

                        <div className="input-group">

                            <FaEnvelope className="input-icon" />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                            />

                        </div>

                        <span>{errors.email}</span>

                    </div>

                    <div>

                        <div className="password-box">

                            <FaLock className="input-icon" />

                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                name="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >

                                {
                                    showPassword
                                        ? <FaEyeSlash />
                                        : <FaEye />
                                }

                            </button>

                        </div>

                        <span>{errors.password}</span>

                    </div>

                    <div className="login-options">

                        <label>

                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) =>
                                    setRememberMe(
                                        e.target.checked
                                    )
                                }
                            />

                            Remember Me

                        </label>

                        <Link
                            to="/forgot-password"
                        >

                            Forgot Password?

                        </Link>

                    </div>

                    <button
                        className="login-btn"
                        disabled={loading}
                    >

                        {
                            loading

                                ?

                                <ClipLoader
                                    color="#fff"
                                    size={20}
                                />

                                :

                                "Sign In"

                        }

                    </button>

                    <p className="bottom-text">

                        Don't have an account?

                        <Link to="/register">

                            Register

                        </Link>

                    </p>

                </form>

            </div>

        </section>

    );

}

export default Login;