import { createReducer } from '@reduxjs/toolkit';
import { SET_ADDRESS_REQUEST } from 'store/actions';
import { initialState } from './state';

export const addressReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_ADDRESS_REQUEST, (state, action) => {
            state.items = action.payload;
        })
});