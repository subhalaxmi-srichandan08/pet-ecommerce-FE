import axios from "axios";
import useAuthStore from "../store/authStore";

const api = axios.create({
    baseURL: "https://pet-ecommerce-cq74.onrender.com/api",
    timeout: 10000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(config => {

    const token = useAuthStore.getState().accessToken;

    if (token)
        config.headers.Authorization = `Bearer ${token}`;

    return config;

});

let isRefreshing = false;

let failedQueue = [];

const processQueue = (token) => {

    failedQueue.forEach(cb => cb(token));

    failedQueue = [];

};

api.interceptors.response.use(

    response => response,

    async error => {

        const originalRequest = error.config;

        if (error.response?.status !== 401)
            return Promise.reject(error);

        if (originalRequest._retry)
            return Promise.reject(error);

        if (isRefreshing) {

            return new Promise(resolve => {
                failedQueue.push(token => {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    resolve(api(originalRequest));
                });
            });

        }

        originalRequest._retry = true;

        isRefreshing = true;

        try {

            const response = await axios.post(
                "https://pet-ecommerce-cq74.onrender.com/api/auth/refresh",
                {},
                {
                    withCredentials: true
                }
            );

            const accessToken = response.data.data.accessToken;

            useAuthStore.getState().setAccessToken(accessToken);

            processQueue(accessToken);

            originalRequest.headers.Authorization = `Bearer ${accessToken}`;

            return api(originalRequest);

        } catch (err) {

            useAuthStore.getState().logout();

            return Promise.reject(err);

        } finally {

            isRefreshing = false;

        }

    }

);

export default api;