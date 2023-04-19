import { createAction } from "@reduxjs/toolkit";
import { TypeAction } from "constants/actions";
import { AuthResponse, RequestPayload } from "types/store";

export const [
    fetchAuthClientRequest,
    fetchAuthClientSuccess,
    fetchAuthClientFailure,
] = [
    createAction<RequestPayload>(TypeAction.LOGIN_REQUEST),
    createAction<AuthResponse>(TypeAction.LOGIN_SUCCESS),
    createAction<string>(TypeAction.REQUEST_FAILURE),
];

export const [
    fetchLogoutRequest,
    fetchLogoutSuccess,
    fetchLogoutFailure,
] = [
    createAction<RequestPayload>(TypeAction.LOGOUT_REQUEST),
    createAction(TypeAction.LOGIN_SUCCESS),
    createAction<string>(TypeAction.LOGOUT_FAILURE),
];
