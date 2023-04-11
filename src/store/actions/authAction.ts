import { createAction } from "@reduxjs/toolkit";
import { TypeAction } from "constants/actions";

export const [
    fetchAuthClientRequest,
    fetchAuthClientSuccess,
    fetchAuthClientFailure,
] = [
    createAction<{ username: string; password: string }>(TypeAction.LOGIN_REQUEST),
    createAction<Record<string, string>>(TypeAction.LOGIN_SUCCESS),
    createAction<string>(TypeAction.REQUEST_FAILURE),
];
