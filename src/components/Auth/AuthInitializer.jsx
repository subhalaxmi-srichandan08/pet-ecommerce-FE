import { useEffect } from "react";
import authService from "../../services/authService";
import useAuthStore from "../../store/authStore";
import useWishlistStore from "../../store/wishlistStore";
import useCartStore from "../../store/cartStore";

function AuthInitializer({ children }) {

    const setAuth = useAuthStore(state => state.setAuth);
    const logout = useAuthStore(state => state.logout);
    const setLoading = useAuthStore(state => state.setLoading);
    const fetchWishlist = useWishlistStore(
        state => state.fetchWishlist
    );
    const fetchCart = useCartStore(
        state => state.fetchCart
    );

    useEffect(() => {

        const init = async () => {

            try {

                const refreshResponse = await authService.refresh();
                setAuth(
                    refreshResponse.data.data.user,
                    refreshResponse.data.data.accessToken
                );

                await Promise.all([
                    fetchCart(),
                    fetchWishlist()
                ]);

            } catch (error) {

                logout();

            } finally {

                setLoading(false);

            }

        };

        init();

    }, []);

    return children;

}

export default AuthInitializer;