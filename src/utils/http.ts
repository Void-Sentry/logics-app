import { ajax } from 'rxjs/ajax'
import { catchError, map, of } from "rxjs";

import { BASE_URL } from 'constants/api';
import { HttpOptions } from 'store/types/api/http';

export const http$ = (URL: string, options: HttpOptions) => (
    ajax(
        {
            url: `${BASE_URL}${URL}`,
            method: options.method,
            headers: options.headers ?? { Authorization: `Bearer ${sessionStorage.getItem('token')}` },
            body: options.body,
        }
    )
    .pipe(
        map(response => response.response),
        catchError(err => of(err))
    )
);

export const http = (URL: string, options: HttpOptions) => (
    fetch(`${BASE_URL}${URL}`, { method: options.method, headers: options.headers || { Authorization: `Bearer ${sessionStorage.getItem('token')}` }, body: options.body })
        .then(response => response.json())
        .then(body => body)
        .catch(e => console.log(e))
);