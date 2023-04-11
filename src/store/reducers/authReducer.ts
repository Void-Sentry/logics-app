import { createReducer } from '@reduxjs/toolkit';
import { fetchAuthClientSuccess } from '../actions/index';

export interface LoginState {
    body: Record<string, string>;
}

const initialState: LoginState = {
    body: {}
};

export const loginReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAuthClientSuccess, (state, action) => {
            state.body = action.payload;
        })
});