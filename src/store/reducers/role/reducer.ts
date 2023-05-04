import { createReducer } from '@reduxjs/toolkit';
import { SET_ROLES_REQUEST } from 'store/actions/roleAction';
import { initialState } from './state';

export const roleReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_ROLES_REQUEST, (state, action) => {
            state.items = action.payload;
        })
});