import auth from './AuthService';


export function getAuthProfile() {
    return auth.getAuthToken();
}