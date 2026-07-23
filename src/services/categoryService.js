import api from "../api/axios";

const getCategories = () => api.get("/categories");

export default {
    getCategories
};