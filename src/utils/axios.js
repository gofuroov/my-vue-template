import axios from "axios";
import {useRequestStore} from '@/store/request.js'
import {useUserStore} from '@/store/user.js'

const config = {
    // baseURL: "http://oama.loc/api/",
    baseURL: "/api/", timeout: 10000, withCredentials: false, headers: {
        "Content-type": "application/json",
    },
};

const instance = axios.create(config);
const requestStore = useRequestStore()
const userStore = useUserStore()
const authInterceptor = (config) => {
    config.headers.Authorization = "Bearer " + userStore.token
    config.headers["Accept-Language"] = 'uz' // TODO later implement
    requestStore.increment()
    return config;
};

instance.interceptors.request.use(authInterceptor);
instance.interceptors.response.use((response) => {
    requestStore.decrement()
    return response;
}, (error) => {
    requestStore.decrement()
    //TODO Global response status
    return Promise.reject(error);
});

export default instance;