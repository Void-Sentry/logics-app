import { createReducer } from '@reduxjs/toolkit';
import { SET_USER_STATE } from '../../actions/index';
import { initialState } from './state';

export const loginReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_USER_STATE, (state, action) => {
            state.item = action.payload.item;
            state.message = action.payload.message;
            sessionStorage.setItem('token', action.payload.item.token);
            // state.item.user.email = action.payload.item.user.email;
            // state.item.user.email_verified_at = action.payload.item.user.email_verified_at;
            // state.item.user.id = action.payload.item.user.id;
            // state.item.user.name = action.payload.item.user.name;
            // state.item.user.tipo_usuario = action.payload.item.user.tipo_usuario;
            // state.item.user.updated_at = action.payload.item.user.updated_at;
            // state.message = action.payload.message;
            // state.item.token = action.payload.item.token;
        })
});