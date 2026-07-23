import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Products from "../pages/Products/Products";

import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

function AppRoutes() {
    return (
        <Routes>

            <Route
                path="/"
                element={<Landing />}
            />

            <Route
                path="/products"
                element={<Products />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/forgot-password"
                element={<ForgotPassword />}
            />

            <Route
                path="/reset-password/:token"
                element={<ResetPassword />}
            />

            <Route
    path="/products/:slug"
    element={<ProductDetails />}
/>

        </Routes>
    );
}

export default AppRoutes;