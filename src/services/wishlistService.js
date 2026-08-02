import api from "../api/axios";

const getWishlist = () =>
    api.get("/wishlist");

const addToWishlist = productId =>
    api.post(`/wishlist/${productId}`);

const removeFromWishlist = productId =>
    api.delete(`/wishlist/${productId}`);

const getWishlistCount = () =>
    api.get("/wishlist/count");

const isInWishlist = productId =>
    api.get(`/wishlist/check/${productId}`);

export default {

    getWishlist,

    addToWishlist,

    removeFromWishlist,

    getWishlistCount,

    isInWishlist

};