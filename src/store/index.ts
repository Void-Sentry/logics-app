import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import { rootReducer } from './reducers';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);