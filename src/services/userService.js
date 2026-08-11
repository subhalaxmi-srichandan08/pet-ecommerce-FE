import api from "../api/axios";

const getProfile = () =>
    api.get("/users/profile");

const updateProfile = data =>
    api.put("/users/profile", data);

export default {
    getProfile,
    updateProfile
};