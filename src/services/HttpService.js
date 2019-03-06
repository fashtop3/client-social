import axios from "axios";
import {toast} from 'react-toastify';
import logger from "./LogService";


function setJwt(jwt) {
    axios.interceptors.request.use(function (config) {
        const auth_token = jwt;

        if (auth_token) {
            config.headers['Access-Control-Allow-Origin'] = '*';
            config.headers.Authorization = `Bearer ${auth_token}`
        }
        return config
    });
}

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        logger.log(error);
        toast.error("Something went wrong!");
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt
};

