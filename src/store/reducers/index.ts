import { combineReducers } from 'redux';
import { loginReducer } from './authReducer';
import { clientReducer } from './clientReducer';
import { rootState } from 'types/store';

export const rootReducer = combineReducers<rootState>({
    user: loginReducer,
    client: clientReducer,
});