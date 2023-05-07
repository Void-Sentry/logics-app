import { createAction } from "@reduxjs/toolkit";
import { RequestPayload } from "store/types/api/http";
import { ColabActionState } from "store/types/store/action/admin/colab";
import { User } from "store/types/store/state/auth";

export const [
    GET_COLABS_REQUEST,
    SET_COLABS_REQUEST,
    CREATE_COLABS_REQUEST,
    UPDATE_COLABS_REQUEST,
    DELETE_COLABS_REQUEST,
] = [
    createAction<RequestPayload>(ColabActionState.GET_COLABS_REQUEST),
    createAction<Array<User>>(ColabActionState.SET_COLABS_REQUEST),
    createAction<User>(ColabActionState.CREATE_COLABS_REQUEST),
    createAction<User>(ColabActionState.UPDATE_COLABS_REQUEST),
    createAction(ColabActionState.DELETE_COLABS_REQUEST),
];
