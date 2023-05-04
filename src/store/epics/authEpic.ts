import { Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { SET_USER_STATE, SIGNIN_REQUEST, SIGNOUT_REQUEST, SIGNUP_REQUEST } from '../actions/authAction';
import { http$ } from 'utils/http';
import { RequestPayload } from 'store/types/api/http';
import { initialState } from 'store/reducers/auth/state';

const loginEpic: Epic = (action$) => (
    action$.pipe(
        ofType(SIGNIN_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
            .pipe(
                map((result) => SET_USER_STATE(result)),
                catchError((e) => of(console.log(e)))
            )
        )
    )
);

const registerEpic: Epic = (action$) => (
    action$.pipe(
        ofType(SIGNUP_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

const logoutEpic: Epic = (action$) => (
    action$.pipe(
        ofType(SIGNOUT_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
            .pipe(
                map(() => SET_USER_STATE(initialState))
            )
        )
    )
);

export const authEpic: Array<Epic> = [loginEpic, registerEpic, logoutEpic];
