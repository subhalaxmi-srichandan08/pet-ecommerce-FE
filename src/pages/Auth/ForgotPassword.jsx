import { useState } from "react";
import { toast } from "react-toastify";
import authService from "../../../services/authService";

function ForgotPassword() {

    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response =
                await authService.forgotPassword({
                    email
                });

            toast.success(
                response.data.message
            );

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

        <form onSubmit={handleSubmit}>

            <h2>Forgot Password</h2>

            <input

                type="email"

                placeholder="Email"

                value={email}

                onChange={(e) =>
                    setEmail(e.target.value)
                }

            />

            <button disabled={loading}>

                {loading
                    ? "Sending..."
                    : "Send Reset Link"}

            </button>

        </form>

    );

}

export default ForgotPassword;