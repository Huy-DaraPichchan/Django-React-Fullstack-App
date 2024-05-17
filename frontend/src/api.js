import axios from 'axios'
import { ACCESS_TOKEN } from './constant'

const apiUrl = "/choreo-apis/djangoreactfullstackapp/backend/rest-api-be2/v1";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default api