import { Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { http$ } from 'utils/http';
import { RequestPayload } from 'store/types/api/http';
import {
    CREATE_COLABS_REQUEST,
    DELETE_COLABS_REQUEST,
    GET_COLABS_REQUEST,
    SET_COLABS_REQUEST,
    UPDATE_COLABS_REQUEST
} from 'store/actions';

const fetchColabsEpic: Epic = (action$) => (
    action$.pipe(
        ofType(GET_COLABS_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
            .pipe(
                map((result) => SET_COLABS_REQUEST(result)),
                catchError((e) => of(console.log(e)))
            )
        )
    )
);

const storeColabsEpic: Epic = (action$) => (
    action$.pipe(
        ofType(CREATE_COLABS_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

const editColabsEpic: Epic = (action$) => (
    action$.pipe(
        ofType(UPDATE_COLABS_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

const destroyColabsEpic: Epic = (action$) => (
    action$.pipe(
        ofType(DELETE_COLABS_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
        )
    )
);

export const colabEpic: Array<Epic> = [
    fetchColabsEpic,
    storeColabsEpic,
    editColabsEpic,
    destroyColabsEpic
];
