import api from "../api/axios";

const getBanners = () => api.get("/banners");

export default {
    getBanners
};