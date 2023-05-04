import { combineEpics } from 'redux-observable';
import { authEpic } from './authEpic';
import { roleEpic } from './roleEpic';

export const rootEpic = combineEpics(
    ...authEpic,
    ...roleEpic,
);