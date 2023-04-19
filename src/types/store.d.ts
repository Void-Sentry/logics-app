import { HEADERS, Method } from "constants/api";
import { LoginState } from "store/reducers/authReducer";

export interface HttpOptions {
    method: Method;
    headers?: Record<string, string>;
    body?: URLSearchParams;
}

export interface RequestPayload {
    url: string;
    options: HttpOptions;
}

export interface ItemAuthResponse {
    user: {
        id: number;
        name: string;
        email: string;
        email_verified_at: null;
        tipo_usuario_id: number;
        created_at: Date;
        updated_at: Date;
    }
    token: string;
}

export interface AuthResponse {
    message: string;
    item: ItemAuthResponse;
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
