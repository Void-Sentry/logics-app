import { Epic, ofType } from "redux-observable";
import { catchError, from, map, mergeMap, of } from "rxjs";
import { clientAuthCredentials, clientAuthCredentialsSuccess } from "store/actions";
import { clientPayload } from "types/store";
import { http$ } from "utils/http";

export const clientEpic: Epic = (action$) => (
    action$.pipe(
        ofType(clientAuthCredentials.type),
        mergeMap((action: { payload: clientPayload }) =>
            from(
                http$(action.payload.url, action.payload.options),
            ).pipe(
                map(result => clientAuthCredentialsSuccess(result)),
                catchError(err => of(console.log(err)))
            )
        )
    )
);