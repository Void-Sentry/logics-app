import { Abstract } from "./generic/abstract";

export interface RequestSignIn extends Abstract {
}

export interface RequestSingUp extends Abstract {
    name: string;
    tipo_usuario_id: number;
}

export enum AuthActionState {
    SIGNIN_REQUEST = 'SIGNIN_REQUEST',
    SIGNUP_REQUEST = 'SIGNUP_REQUEST',
    SIGNOUT_REQUEST = 'SIGNOUT_REQUEST',
    SET_USER_STATE = 'SET_USER_STATE',
};
