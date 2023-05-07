import { createReducer } from '@reduxjs/toolkit';
import { SET_ROUTES_REQUEST } from 'store/actions';
import { initialState } from './state';

export const routeReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_ROUTES_REQUEST, (state, action) => {
            state.items = action.payload;
        })
});