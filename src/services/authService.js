import api from "../api/axios";

class AuthService {

    async register(userData) {

        const response =
            await api.post(
                "/auth/register",
                userData
            );

        return response.data;

    }

    async login(credentials) {

        const response =
            await api.post(
                "/auth/login",
                credentials
            );

        return response.data;

    }

}

export default new AuthService();