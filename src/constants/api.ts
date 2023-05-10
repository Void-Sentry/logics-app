export const BASE_URL: string = process.env.REACT_APP_BASE_URL;

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
    FETCH_ROUTE = 'entrega/entrega',
    FETCH_COLAB = 'usuario/usuario',
    FETCH_VEHICLE = 'veiculo/veiculo',
    FETCH_DELIVERY = 'endereco/endereco',
    FETCH_ROLE = 'tipo/tipo',
    FETCH_CHARGE = 'charge/charge',
}

export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}