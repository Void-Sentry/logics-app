import { createAction } from "@reduxjs/toolkit";
import { RequestPayload } from "store/types/api/http";
import { AuthActionState } from "store/types/store/action/auth";
import { AuthState } from "store/types/store/state/auth";

export const [
    SIGNIN_REQUEST,
    SIGNUP_REQUEST,
    SIGNOUT_REQUEST,
] = [
    createAction<RequestPayload>(AuthActionState.SIGNIN_REQUEST),
    createAction<RequestPayload>(AuthActionState.SIGNUP_REQUEST),
    createAction<RequestPayload>(AuthActionState.SIGNOUT_REQUEST),
];

export const [
    SET_USER_STATE,
] = [
    createAction<AuthState>(AuthActionState.SET_USER_STATE),
];
