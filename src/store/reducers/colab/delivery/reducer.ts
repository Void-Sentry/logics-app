import { createReducer } from '@reduxjs/toolkit';
import { SET_DELIVERIES_REQUEST } from 'store/actions';
import { initialState } from './state';

export const deliveryReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_DELIVERIES_REQUEST, (state, action) => {
            state.items = action.payload;
        })
});