import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authService from "../../../services/authService";

function ResetPassword() {

    const { token } = useParams();

    const navigate = useNavigate();

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

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

        <form onSubmit={handleSubmit}>

            <h2>Reset Password</h2>

            <input

                type="password"

                placeholder="New Password"

                value={password}

                onChange={(e) =>
                    setPassword(e.target.value)
                }

            />

            <button disabled={loading}>

                {loading
                    ? "Updating..."
                    : "Reset Password"}

            </button>

        </form>

    );

}

export default ResetPassword;