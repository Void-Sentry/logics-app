import { combineReducers } from 'redux';

import { rootState } from 'store/types/store/state/root';
import { loginReducer } from './auth/index';

export const rootReducer = combineReducers<rootState>({
    auth: loginReducer,
});