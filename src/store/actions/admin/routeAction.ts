import { createAction } from "@reduxjs/toolkit";
import { RequestPayload } from "store/types/api/http";
import { RouteActionState } from "store/types/store/action/admin/route";
import { Route } from "store/types/store/state/admin/route";

export const [
    GET_ROUTES_REQUEST,
    SET_ROUTES_REQUEST,
    CREATE_ROUTES_REQUEST,
    UPDATE_ROUTES_REQUEST,
    DELETE_ROUTES_REQUEST,
] = [
    createAction<RequestPayload>(RouteActionState.GET_ROUTES_REQUEST),
    createAction<Array<Route>>(RouteActionState.SET_ROUTES_REQUEST),
    createAction<Route>(RouteActionState.CREATE_ROUTES_REQUEST),
    createAction<Route>(RouteActionState.UPDATE_ROUTES_REQUEST),
    createAction(RouteActionState.DELETE_ROUTES_REQUEST),
];
