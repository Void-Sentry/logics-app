import { Method } from "constants/api";

export interface HttpOptions {
    method: Method;
    headers?: Record<string, string>;
    body?: URLSearchParams;
}

export interface RequestPayload {
    url: string;
    options: HttpOptions;
}