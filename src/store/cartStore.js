import { create } from "zustand";

import cartService from "../services/cartService";

const useCartStore = create((set) => ({

    cart: null,

    count: 0,

    fetchCart: async () => {

        try {

            const res = await cartService.getCart();

            const cart = res.data.data;

            const count = cart.items.reduce(
                (sum, item) => sum + item.quantity,
                0
            );

            set({
                cart,
                count
            });

        } catch {

            set({
                cart: null,
                count: 0
            });

        }

    }

}));

export default useCartStore;