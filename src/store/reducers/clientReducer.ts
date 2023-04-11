import { createReducer } from '@reduxjs/toolkit';
import { clientAuthCredentialsSuccess } from '../actions/index';
import { clientCredentials } from 'types/store';

const initialState: clientCredentials = {
    access_token: '',
    expires_in: 0,
    "not-before-policy": 0,
    refresh_expires_in: 0,
    refresh_token: '',
    scope: '',
    session_state: '',
    token_type: '',
};

export const clientReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(clientAuthCredentialsSuccess, (state, action) => {
            state.access_token = action.payload.access_token;
            state.expires_in = action.payload.expires_in;
            state['not-before-policy'] = action.payload['not-before-policy'];
            state.refresh_expires_in = action.payload.refresh_expires_in;
            state.refresh_token = action.payload.refresh_token;
            state.scope = action.payload.scope;
            state.session_state = action.payload.session_state;
            state.token_type = action.payload.token_type;
        })
});