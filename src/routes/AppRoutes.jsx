import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {

  return (
    <Routes>

      <Route
        path="/"
        element={<ProtectedRoute>
          <Home />
        </ProtectedRoute>}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

    </Routes>
  );
}

export default AppRoutes;