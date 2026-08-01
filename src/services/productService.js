import api from "../api/axios";

const getProducts = params =>
    api.get("/products", { params });

const getProduct = slug =>
    api.get(`/products/${slug}`);

const getSuggestions = q =>
    api.get("/products/suggestions", {
        params: { q }
    });


export default {
    getProducts,
    getProduct,
    getSuggestions
};