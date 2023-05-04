import { Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { http$ } from 'utils/http';
import { RequestPayload } from 'store/types/api/http';
import { GET_ROLES_REQUEST, SET_ROLES_REQUEST } from 'store/actions/roleAction';

const getRolesEpic: Epic = (action$) => (
    action$.pipe(
        ofType(GET_ROLES_REQUEST.type),
        mergeMap((action: { payload: RequestPayload }) =>
            from(
                http$(action.payload.url, action.payload.options)
            )
            .pipe(
                map((result) => SET_ROLES_REQUEST(result)),
                catchError((e) => of(console.log(e)))
            )
        )
    )
);

export const roleEpic: Array<Epic> = [getRolesEpic];
