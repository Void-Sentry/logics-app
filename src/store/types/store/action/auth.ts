export interface RequestSignIn {
    email: string;
    password: string;
}

export interface RequestSingUp {
    name: string;
    email: string;
    password: number;
    tipo_usuario_id: number;
}

export enum AuthActionState {
    SIGNIN_REQUEST = 'SIGNIN_REQUEST',
    SIGNUP_REQUEST = 'SIGNUP_REQUEST',
    SIGNOUT_REQUEST = 'SIGNOUT_REQUEST',
    SET_USER_STATE = 'SET_USER_STATE',
};
