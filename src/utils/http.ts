import { ajax } from 'rxjs/ajax'
import { catchError, map, of } from "rxjs";
import { HttpOptions } from 'types/store';
import { BASE_URL, Endpoint } from 'constants/api';

export const http = (
    url: Endpoint,
    options: HttpOptions,
) => (
    fetch(`${BASE_URL}${url}`, options)
        .then(response => response.json())
        .then(data => data)
        .catch(e => console.log(e))
);

export const http$ = (URL: string, options: HttpOptions) => (
    ajax(
        {
            url: URL,
            method: options.method,
            headers: options.headers,
            body: options.body
        }
    )
    .pipe(
        map(response => response.response),
        catchError(err => of(err))
    )
);