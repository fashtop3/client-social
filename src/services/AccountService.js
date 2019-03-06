import http from './HttpService';
// import {apiUrl} from '../config';

const apiUrl = "http://localhost:5005";
const apiEndpoint = apiUrl + "/social/accounts/";

export function activateSocialAccount(aggregatorId){
    return http.post(apiEndpoint);
}