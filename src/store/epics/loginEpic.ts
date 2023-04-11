import { Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { fetchAuthClientRequest, fetchAuthClientSuccess, fetchAuthClientFailure } from '../actions/index';
import { http$ } from 'utils/http';
import { BASE_URL, Endpoint, HEADERS, Method, URL_ENCODED } from 'constants/api';

export const loginEpic: Epic = (action$) => (
    action$.pipe(
        ofType(fetchAuthClientRequest.type),
        mergeMap(() => from(http$(`${BASE_URL}${Endpoint.AUTH_CLIENT}`, { method: Method.POST, headers: HEADERS, body: URL_ENCODED}))
            .pipe(
                map((result) => fetchAuthClientSuccess(result)),
                catchError(() => of(fetchAuthClientFailure()))
            )
        )
    )
);
