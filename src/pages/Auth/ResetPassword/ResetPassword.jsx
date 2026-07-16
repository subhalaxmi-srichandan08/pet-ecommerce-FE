import { useState } from "react";
import {
    useNavigate,
    useParams,
    Link
} from "react-router-dom";

import {
    FaEye,
    FaEyeSlash,
    FaLock,
    FaPaw
} from "react-icons/fa";

import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import authService from "../../../services/authService";
import "../Login/Login.css";

function ResetPassword() {

    const { token } = useParams();

    const navigate = useNavigate();

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] =
        useState(false);

    const [loading, setLoading] =
        useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response =
                await authService.resetPassword(
                    token,
                    {
                        password
                    }
                );

            toast.success(
                response.data.message
            );

            navigate("/login");

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Unable to reset password."

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

                <h2>Create New Password</h2>

                <p>

                    Your new password should be strong
                    and different from your previous one.

                </p>

            </div>

            <div className="login-right">

                <form
                    className="login-card"
                    onSubmit={handleSubmit}
                >

                    <h2>Reset Password</h2>

                    <p className="subtitle">

                        Enter your new password below.

                    </p>

                    <div className="password-box">

                        <FaLock className="input-icon" />

                        <input

                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }

                            placeholder="New Password"

                            value={password}

                            onChange={(e) =>
                                setPassword(e.target.value)
                            }

                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                        >

                            {
                                showPassword

                                    ?

                                    <FaEyeSlash />

                                    :

                                    <FaEye />

                            }

                        </button>

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

                                "Reset Password"

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

export default ResetPassword;