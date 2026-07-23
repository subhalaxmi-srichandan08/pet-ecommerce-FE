import api from "../api/axios";

const getProducts = params =>
    api.get("/products", { params });

const getProduct = slug =>
    api.get(`/products/${slug}`);

export default {
    getProducts,
    getProduct
};