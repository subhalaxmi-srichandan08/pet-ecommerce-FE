import api from "../api/axios";

const getCart = () => api.get("/cart");

const addToCart = (productId, quantity = 1) =>
    api.post("/cart", {
        productId,
        quantity,
    });

const updateQuantity = (productId, quantity) =>
    api.patch(`/cart/${productId}`, {
        quantity,
    });

const removeItem = productId =>
    api.delete(`/cart/${productId}`);

export default {
    getCart,
    addToCart,
    updateQuantity,
    removeItem,
};