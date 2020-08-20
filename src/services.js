import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const api = {
    get(endpoint){
        return axiosInstance.get(endpoint);
    },
    delete(endpoint){
        return axiosInstance.delete(endpoint, {
            method: 'DELETE'
        });
    },
    post(endpoint, options){
        return axiosInstance.post(endpoint, options);
    },
    put(endpoint, options){
        return axiosInstance.put(endpoint, options);
    }
}