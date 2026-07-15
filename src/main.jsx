import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AuthInitializer from "./components/Auth/AuthInitializer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import "./styles/global.css";
import "./styles/variables.css";



ReactDOM.createRoot(
    document.getElementById("root")
).render(
    <BrowserRouter>

        <AuthInitializer>
            <App />
        </AuthInitializer>

        <ToastContainer
            position="top-right"
            autoClose={2500}
        />

    </BrowserRouter>
);