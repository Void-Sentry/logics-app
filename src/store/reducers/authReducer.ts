import { createReducer } from '@reduxjs/toolkit';
import { AuthResponse } from 'types/store';
import { fetchAuthClientSuccess } from '../actions/index';

export const initialState: AuthResponse = {
    message: '',
    item: {
        user: {
            id: 0,
            name: '',
            email: '',
            email_verified_at: null,
            tipo_usuario_id: 0,
            created_at: new Date(),
            updated_at: new Date()
        },
        token: ''
    },
};

export const loginReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAuthClientSuccess, (state, action) => {
            state = action.payload;
            // state.item.user.email = action.payload.item.user.email;
            // state.item.user.email_verified_at = action.payload.item.user.email_verified_at;
            // state.item.user.id = action.payload.item.user.id;
            // state.item.user.name = action.payload.item.user.name;
            // state.item.user.tipo_usuario_id = action.payload.item.user.tipo_usuario_id;
            // state.item.user.updated_at = action.payload.item.user.updated_at;
            // state.message = action.payload.message;
            // state.item.token = action.payload.item.token;
        })
});