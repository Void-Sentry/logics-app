import { createReducer } from '@reduxjs/toolkit';
import { fetchAuthClientRequest, fetchAuthClientSuccess, fetchAuthClientFailure } from '../actions/index';

export interface LoginState {
    username: string,
    password: string,
    body: Record<string, string>;
}

const initialState: LoginState = {
    username: '',
    password: '',
    body: {}
};

export const loginReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAuthClientRequest, (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        })
        .addCase(fetchAuthClientSuccess, (state, action) => {
            state.body = action.payload;
        })
        .addCase(fetchAuthClientFailure, (state, action) => {
            // state.loading = false;
            // state.err = action.payload;
        });
});