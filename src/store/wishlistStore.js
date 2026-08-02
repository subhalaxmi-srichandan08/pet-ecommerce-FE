import { create } from "zustand";

import wishlistService from "../services/wishlistService";

const useWishlistStore = create((set, get) => ({

    wishlist: [],

    count: 0,

    loading: false,

    fetchWishlist: async () => {

        set({
            loading: true
        });

        try {

            const res =
                await wishlistService.getWishlist();

            set({

                wishlist: res.data.data,

                count: res.data.count,

                loading: false

            });

        } catch (error) {

            console.error(error);

            set({
                loading: false
            });

        }

    },

    addToWishlist: async product => {

        await wishlistService.addToWishlist(product._id);

        set(state => ({

            wishlist: [
                ...state.wishlist,
                {
                    product
                }
            ],

            count: state.count + 1

        }));

    },

    removeFromWishlist: async productId => {
        await wishlistService.removeFromWishlist(productId);
        set(state => ({
            wishlist: state.wishlist.filter(
                item => item.product._id !== productId
            ),
            count: Math.max(0, state.count - 1)

        }));
    },

    isWishlisted: productId => {

        return get().wishlist.some(
            item =>
                item.product._id === productId
        );

    }

}));

export default useWishlistStore;