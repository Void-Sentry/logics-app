import { createAction } from '@reduxjs/toolkit';
import { TypeAction } from 'constants/actions';
import { clientCredentials, RequestPayload } from 'types/store';

export const [
    clientAuthCredentials,
    clientAuthCredentialsSuccess,
    clientAuthCredentialsFailure,
] = [
    createAction<RequestPayload>(TypeAction.CLIENT_CREDENTIALS),
    createAction<clientCredentials>(TypeAction.CLIENT_CREDENTIALS_SUCCESS),
    createAction(TypeAction.REQUEST_FAILURE)
];
