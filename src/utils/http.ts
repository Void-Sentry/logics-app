import { HttpOptions } from "types/api";

export const http = <T>(URL: string, options: HttpOptions): Promise<T> => (
    fetch(URL, options)
        .then(response => response.json())  
);