import { Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { http$ } from 'utils/http';
import { RequestPayload } from 'store/types/api/http';
import {
    CREATE_CHARGES_REQUEST,
    DELETE_CHARGES_REQUEST,
    GET_CHARGES_REQUEST,
    SET_CHARGES_REQUEST,
    UPDATE_CHARGES_REQUEST
} from 'store/actions';

const fetchChargesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(GET_CHARGES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
            .pipe(
                map((result) => SET_CHARGES_REQUEST(result)),
                catchError((e) => of(console.log(e)))
            )
        )
    )
);

const storeChargesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(CREATE_CHARGES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

const editChargesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(UPDATE_CHARGES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

const destroyChargesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(DELETE_CHARGES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

export const chargeEpic: Array<Epic> = [
    fetchChargesEpic,
    storeChargesEpic,
    editChargesEpic,
    destroyChargesEpic
];
