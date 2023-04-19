import { Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { fetchAuthClientRequest, fetchAuthClientSuccess, fetchAuthClientFailure, fetchLogoutRequest, fetchLogoutFailure } from '../actions/index';
import { http$ } from 'utils/http';
import { RequestPayload } from 'types/store';
import { initialState } from 'store/reducers/authReducer';

export const loginEpic: Epic = (action$) => (
    action$.pipe(
        ofType(fetchAuthClientRequest.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
            .pipe(
                map((result) => fetchAuthClientSuccess(result)),
                catchError((e) => of(console.log(e)))
            )
        )
    )
);

export const logoutEpic: Epic = (action$) => (
    action$.pipe(
        ofType(fetchLogoutRequest.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
            .pipe(
                map(() => fetchAuthClientSuccess(initialState)),
                catchError(() => of(fetchLogoutFailure()))
            )
        )
    )
);
