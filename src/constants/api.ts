import { store } from "store";

export const [
    BASE_URL,
    headers
]: [string, Record<'Authorization', string>] = [process.env.REACT_APP_BASE_URL, { Authorization: `${store.getState().user.item.token}` }];

export const URL_ENCODED: URLSearchParams = new URLSearchParams({
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    grant_type: process.env.REACT_APP_GRANT_TYPE
});

export enum Endpoint {
    AUTH_CLIENT = 'auth/realms/master/protocol/openid-connect/token',
    AUTH_LOGIN = 'auth/login',
    AUTH_LOGOUT = 'auth/logout',
    AUTH_REGISTER = 'auth/register',
}

export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}