import { createReducer } from '@reduxjs/toolkit';
import { SET_COLABS_REQUEST } from 'store/actions';
import { initialState } from './state';

export const loginReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_COLABS_REQUEST, (state, action) => {
            state.items = action.payload;
        })
});