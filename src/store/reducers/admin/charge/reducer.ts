import { createReducer } from '@reduxjs/toolkit';
import { SET_CHARGES_REQUEST } from 'store/actions';
import { initialState } from './state';

export const chargeReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_CHARGES_REQUEST, (state, action) => {
            state.items = action.payload;
        })
});