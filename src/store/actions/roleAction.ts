import { createAction } from "@reduxjs/toolkit";
import { RequestPayload } from "store/types/api/http";
import { RoleActionState } from "store/types/store/action/role";
import { Role } from "store/types/store/state/role";

export const [
    GET_ROLES_REQUEST,
    SET_ROLES_REQUEST,
] = [
    createAction<RequestPayload>(RoleActionState.GET_ROLE_REQUEST),
    createAction<Array<Role>>(RoleActionState.SET_ROLE_REQUEST),
];
