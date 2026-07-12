import api from "../api/axios";

const register = data => api.post("/auth/register", data);

const login = data => api.post("/auth/login", data);

const logout = () => api.post("/auth/logout");

const refresh = () => api.post("/auth/refresh");

export default {

    register,

    login,

    logout,

    refresh

};