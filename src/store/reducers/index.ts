import { combineReducers } from 'redux';

import { rootState } from 'store/types/store/state/root';
import { loginReducer } from './auth/index';
import { roleReducer } from './role';

export const rootReducer = combineReducers<rootState>({
    auth: loginReducer,
    role: roleReducer,
});