import http from './HttpService';

const apiUrl = `${process.env.REACT_APP_SERVICE_URL}`;
const apiEndpoint = apiUrl + "/social/accounts/";
const apiMandateEndpoint = apiUrl + "/social/mandates/";
const apiSingleEndpoint = `${apiUrl}/social/accounts/aggregator`;

export function activateSocialAccount(aggregator){
    return http.post(apiEndpoint, aggregator);
}

export function getSocialAccount(aggregatorId){
    const aggregatorAccountUrl = `${apiSingleEndpoint}/${aggregatorId}/`;
    return http.get(aggregatorAccountUrl);
}

export function getAccountMandates(aggregatorId){
    const aggregatorMandateUrl = `${apiMandateEndpoint}${aggregatorId}/`;
    return http.get(aggregatorMandateUrl);
}

export function getAllMandates() {
    return http.get(apiMandateEndpoint);
}

export function saveMandate(mandate){
    return http.post(apiMandateEndpoint, mandate);
}