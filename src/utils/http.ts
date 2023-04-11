import { ajax } from 'rxjs/ajax'
import { catchError, map, of } from "rxjs";
import { HttpOptions } from 'types/store';

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