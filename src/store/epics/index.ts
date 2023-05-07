import { combineEpics } from 'redux-observable';
import { authEpic } from './authEpic';
import { roleEpic } from './roleEpic';
import {
    chargeEpic,
    colabEpic,
    routeEpic,
    vehicleEpic
} from './admin';
import { deliveryEpic } from './colab';

export const rootEpic = combineEpics(
    ...authEpic,
    ...roleEpic,
    ...chargeEpic,
    ...colabEpic,
    ...routeEpic,
    ...vehicleEpic,
    ...deliveryEpic,
);