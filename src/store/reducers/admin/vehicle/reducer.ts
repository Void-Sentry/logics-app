import { createReducer } from '@reduxjs/toolkit';
import { SET_VEHICLES_REQUEST } from 'store/actions';
import { initialState } from './state';

export const vehicleReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_VEHICLES_REQUEST, (state, action) => {
            state.items = action.payload;
        })
});