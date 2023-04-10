export interface HttpOptions {
    method: Method;
    headers: Record<string, string>;
    body: URLSearchParams;
}