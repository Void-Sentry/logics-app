import { Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { http$ } from 'utils/http';
import { RequestPayload } from 'store/types/api/http';
import {
    CREATE_DELIVERIES_REQUEST,
    DELETE_DELIVERIES_REQUEST,
    GET_DELIVERIES_REQUEST,
    SET_DELIVERIES_REQUEST,
    UPDATE_DELIVERIES_REQUEST
} from 'store/actions';

const fetchDeliveriesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(GET_DELIVERIES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
            .pipe(
                map((result) => SET_DELIVERIES_REQUEST(result)),
                catchError((e) => of(console.log(e)))
            )
        )
    )
);

const storeDeliveriesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(CREATE_DELIVERIES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

const editDeliveriesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(UPDATE_DELIVERIES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

const destroyDeliveriesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(DELETE_DELIVERIES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

export const deliveryEpic: Array<Epic> = [
    fetchDeliveriesEpic,
    storeDeliveriesEpic,
    editDeliveriesEpic,
    destroyDeliveriesEpic
];
