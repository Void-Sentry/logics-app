import { Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { http$ } from 'utils/http';
import { RequestPayload } from 'store/types/api/http';
import {
    CREATE_ROUTES_REQUEST,
    DELETE_ROUTES_REQUEST,
    GET_ROUTES_REQUEST,
    SET_ROUTES_REQUEST,
    UPDATE_ROUTES_REQUEST
} from 'store/actions';

const fetchRoutesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(GET_ROUTES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
            .pipe(
                map((result) => SET_ROUTES_REQUEST(result)),
                catchError((e) => of(console.log(e)))
            )
        )
    )
);

const storeRoutesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(CREATE_ROUTES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

const editRoutesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(UPDATE_ROUTES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

const destroyRoutesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(DELETE_ROUTES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

export const routeEpic: Array<Epic> = [
    fetchRoutesEpic,
    storeRoutesEpic,
    editRoutesEpic,
    destroyRoutesEpic
];
