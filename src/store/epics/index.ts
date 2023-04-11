import { combineEpics } from 'redux-observable';
import { clientEpic } from './clientEpic';
import { loginEpic } from './loginEpic';

export const rootEpic = combineEpics(
    clientEpic,
    loginEpic
);