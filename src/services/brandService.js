import api from "../api/axios";

const getBrands = () => api.get("/brands");

export default {
    getBrands,
};