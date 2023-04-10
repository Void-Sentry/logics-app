import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { loginReducer } from './reducers/index';
import { loginEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer: loginReducer,
    middleware: [epicMiddleware],
});

epicMiddleware.run(loginEpic);