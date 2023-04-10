import { createAction } from "@reduxjs/toolkit";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "constants/actions";

// export const [
//     fetchAuthClientRequest,
//     fetchAuthClientSuccess,
//     fetchAuthClientFailure,
// ] = [
//     ({ mail: string, pass: string }) => ({ type: LOGIN_REQUEST, payload: { mail, pass } }),
//     (data: unknown) => ({ type: LOGIN_SUCCESS, payload: data }),
//     () => ({ type: LOGIN_FAILURE })
// ];

export const [
    fetchAuthClientRequest,
    fetchAuthClientSuccess,
    fetchAuthClientFailure,
] = [
    createAction<{ username: string; password: string }>(LOGIN_REQUEST),
    createAction<Record<string, string>>(LOGIN_SUCCESS),
    createAction<string>(LOGIN_FAILURE),
];
