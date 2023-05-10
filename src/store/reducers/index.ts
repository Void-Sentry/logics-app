import { combineReducers } from 'redux';

import { rootState } from 'store/types/store/state/root';
import { loginReducer } from './auth/index';
import { roleReducer } from './role';
import {
    chargeReducer,
    colabReducer,
    routeReducer,
    vehicleReducer
} from './admin';

export const rootReducer = combineReducers<rootState>({
    auth: loginReducer,
    role: roleReducer,
    charge: chargeReducer,
    colab: colabReducer,
    route: routeReducer,
    vehicle: vehicleReducer,
});