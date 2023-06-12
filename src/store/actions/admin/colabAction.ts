import { createAction } from "@reduxjs/toolkit";
import { RequestPayload } from "store/types/api/http";
import { ColabActionState } from "store/types/store/action/admin/colab";
import { Colab } from "store/types/store/state/admin/colab";

export const [
    GET_COLABS_REQUEST,
    SET_COLABS_REQUEST,
    CREATE_COLABS_REQUEST,
    UPDATE_COLABS_REQUEST,
    DELETE_COLABS_REQUEST,
] = [
    createAction<RequestPayload>(ColabActionState.GET_COLABS_REQUEST),
    createAction<Array<Colab>>(ColabActionState.SET_COLABS_REQUEST),
    createAction<Colab>(ColabActionState.CREATE_COLABS_REQUEST),
    createAction<Colab>(ColabActionState.UPDATE_COLABS_REQUEST),
    createAction(ColabActionState.DELETE_COLABS_REQUEST),
];
