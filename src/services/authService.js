import api from "../api/axios";

const register = data => api.post("/auth/register", data);

const login = data => api.post("/auth/login", data);

const refresh = () => api.post("/auth/refresh");

const me = () => api.get("/auth/me");

const logout = () => api.post("/auth/logout");

export default {
    register,
    login,
    refresh,
    me,
    logout
};