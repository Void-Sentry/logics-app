import { createReducer } from '@reduxjs/toolkit';
import { SET_USER_STATE } from '../../actions/index';
import { initialState } from './state';

export const loginReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_USER_STATE, (state, action) => {
            state.item = action.payload.item;
            state.message = action.payload.message;
            sessionStorage.setItem('token', action.payload.item.token);
        })
});