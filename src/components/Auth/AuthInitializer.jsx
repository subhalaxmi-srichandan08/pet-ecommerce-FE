import { useEffect } from "react";
import authService from "../../services/authService";
import useAuthStore from "../../store/authStore";

function AuthInitializer({ children }) {

    const setAuth = useAuthStore(state => state.setAuth);
    const logout = useAuthStore(state => state.logout);
    const setLoading = useAuthStore(state => state.setLoading);

    useEffect(() => {

        const init = async () => {

            try {

                const refreshResponse = await authService.refresh();
                setAuth(
                    refreshResponse.data.data.user,
                    refreshResponse.data.data.accessToken
                );

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