import http from './HttpService';
import {apiUrl} from '../config';
import jwtDecode from "jwt-decode";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const apiEndpoint = apiUrl + "/auth";
const tokenKey = 'auth-token';

http.setJwt(getAuthToken());

export async function login(identity, password) {
    const {data} = await http.post(apiEndpoint, {identity, password});
    localStorage.setItem(tokenKey, data.access_token);
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        if(jwt){
            return jwtDecode(jwt);
        }else {
            const jwt = getAuthToken();
            loginWithJwt(jwt);
            return jwtDecode(jwt);
        }

    }
    catch (ex) {
        return null;
    }
}


export function getAuthToken(){
    return cookies.get('lever-token') || null;
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    logout,
    getAuthToken,
    getCurrentUser,
    loginWithJwt,
    getJwt
};