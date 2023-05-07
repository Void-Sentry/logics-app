import { Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { http$ } from 'utils/http';
import { RequestPayload } from 'store/types/api/http';
import {
    CREATE_VEHICLES_REQUEST,
    DELETE_VEHICLES_REQUEST,
    GET_VEHICLES_REQUEST,
    SET_VEHICLES_REQUEST,
    UPDATE_VEHICLES_REQUEST
} from 'store/actions';

const fetchVehiclesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(GET_VEHICLES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
            .pipe(
                map((result) => SET_VEHICLES_REQUEST(result)),
                catchError((e) => of(console.log(e)))
            )
        )
    )
);

const storeVehiclesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(CREATE_VEHICLES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

const editVehiclesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(UPDATE_VEHICLES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

const destroyVehiclesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(DELETE_VEHICLES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

export const vehicleEpic: Array<Epic> = [
    fetchVehiclesEpic,
    storeVehiclesEpic,
    editVehiclesEpic,
    destroyVehiclesEpic
];
