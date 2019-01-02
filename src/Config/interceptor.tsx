import axios from 'axios';
import { environment } from '../Environments/env.dev';
const token = localStorage.getItem('token');
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (config.url) {
        config.url = `${environment.API_BASE}${config.url}`
    }
    if (token) {
        config.headers = {
            "x-access-token": token
        }
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});