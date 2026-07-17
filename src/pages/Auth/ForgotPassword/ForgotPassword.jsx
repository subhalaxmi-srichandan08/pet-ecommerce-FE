import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPaw } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import authService from "../../../services/authService";
import "../Login/Login.css";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response =
                await authService.forgotPassword({ email });

            toast.success(response.data.message);

            setEmail("");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Something went wrong."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <section className="login-page">

            <div className="login-left">

                <FaPaw className="paw-icon" />

                <h1>PawPoint</h1>

                <h2>Forgot Password?</h2>

                <p>

                    Enter your registered email and we'll
                    send you a secure password reset link.

                </p>

            </div>

            <div className="login-right">

                <form
                    className="login-card"
                    onSubmit={handleSubmit}
                >

                    <h2>Forgot Password</h2>

                    <p className="subtitle">

                        We'll email you a password reset link.

                    </p>

                    <div className="input-group">

                        <FaEnvelope className="input-icon" />

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />

                    </div>
                    <br></br>
                    <button
                        className="login-btn"
                        disabled={loading}
                    >

                        {
                            loading

                                ?

                                <ClipLoader
                                    size={20}
                                    color="#fff"
                                />

                                :

                                "Send Reset Link"

                        }

                    </button>

                    <p className="bottom-text">

                        <Link to="/login">

                            Back to Login

                        </Link>

                    </p>

                </form>

            </div>

        </section>
    );
}

export default ForgotPassword;