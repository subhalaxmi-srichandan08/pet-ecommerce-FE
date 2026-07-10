import { useState } from "react";
import { FaEye, FaEyeSlash, FaPaw } from "react-icons/fa";
import { Link, replace } from "react-router-dom";
import "./Register.css";
import { validateRegister } from "../../../utils/validators";
import PasswordChecklist from "../../../components/Auth/PasswordChecklist";
import { FaCheckCircle } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import authService from "../../../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

function Register() {

    const [form, setForm] = useState(initialState);

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirm, setShowConfirm] = useState(false);

    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedForm = {
            ...form,
            [name]: value,
        };
        setForm(updatedForm);
        setErrors(validateRegister(updatedForm));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const validation =
            validateRegister(form);

        if (Object.keys(validation).length) {
            setErrors(validation);
            return;
        }

        try {

            setLoading(true);

            const response =
                await authService.register({
                    firstName: form.firstName,
                    lastName: form.lastName,
                    email: form.email,
                    password: form.password
                });

            localStorage.setItem("token",response.data.token);

            localStorage.setItem("user",JSON.stringify(response.data.user));
            toast.success(response.message);
            navigate("/login", {replace:true});
        }

        catch (error) {
            console.log(error);
            toast.error(

                error.response?.data?.message ||

                "Registration failed."

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <section className="register-page">

            <div className="register-left">

                <FaPaw className="paw-icon" />

                <h1>PawPoint</h1>

                <h2>Everything Your Pet Needs ❤️</h2>

                <p>

                    Join thousands of pet lovers shopping
                    premium food, toys and accessories.

                </p>

            </div>


            <div className="register-right">

                <form
                    onSubmit={handleSubmit}
                    className="register-card"
                >

                    <h2>Create Account</h2>

                    <div className="row">

                        <div>

                            <input
                                name="firstName"
                                placeholder="First Name"
                                value={form.firstName}
                                onChange={handleChange}
                            />

                            <span>{errors.firstName}</span>

                        </div>

                        <div>

                            <input
                                name="lastName"
                                placeholder="Last Name"
                                value={form.lastName}
                                onChange={handleChange}
                            />

                            <span>{errors.lastName}</span>

                        </div>

                    </div>

                    <div className="input-group">

                        <input
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                        />

                        {
                            form.email &&
                            !errors.email &&
                            <FaCheckCircle className="success-icon" />
                        }

                    </div>

                    <span>{errors.email}</span>

                    <div className="password-box">

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

                    <PasswordChecklist
                        password={form.password}
                    />

                    <div className="password-box">

                        <input
                            type={
                                showConfirm
                                    ? "text"
                                    : "password"
                            }
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirm(!showConfirm)
                            }
                        >

                            {
                                showConfirm
                                    ? <FaEyeSlash />
                                    : <FaEye />
                            }

                        </button>

                    </div>

                    <span>
                        {errors.confirmPassword}
                    </span>

                    <label className="terms">

                        <input
                            type="checkbox"
                            checked={acceptedTerms}
                            onChange={(e) =>
                                setAcceptedTerms(e.target.checked)
                            }
                        />

                        <span>
                            I agree to the{" "}
                            <Link to="/terms">Terms &amp; Conditions</Link>
                            {" "}and{" "}
                            <Link to="/privacy">Privacy Policy</Link>
                        </span>

                    </label>

                    <button
                        className="register-btn"
                        disabled={
                            loading ||
                            !acceptedTerms ||
                            Object.keys(errors).length > 0
                        }
                    >

                        {
                            loading ? (
                                <ClipLoader
                                    color="#fff"
                                    size={20}
                                />
                            ) : (
                                "Create Account"
                            )
                        }

                    </button>

                    <p>

                        Already have an account?

                        <Link to="/login">

                            Login

                        </Link>

                    </p>

                </form>

            </div>

        </section>

    );

}

export default Register;