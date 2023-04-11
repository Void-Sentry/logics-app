import { HEADERS, Method } from "constants/api";
import { LoginState } from "store/reducers/authReducer";

export interface HttpOptions {
    method: Method;
    headers?: Record<string, string>;
    body?: URLSearchParams;
}

export interface clientPayload {
    url: string;
    options: HttpOptions;
}

export interface clientCredentials {
    access_token: string;
    expires_in: number;
    "not-before-policy": number;
    refresh_expires_in: number;
    refresh_token: string;
    scope: string;
    session_state: string;
    token_type: string;
}

export interface rootState {
    user: LoginState;
    client: clientCredentials;
}
