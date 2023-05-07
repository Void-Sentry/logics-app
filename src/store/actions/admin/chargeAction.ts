import { createAction } from "@reduxjs/toolkit";
import { RequestPayload } from "store/types/api/http";
import { ChargeActionState } from "store/types/store/action/admin/charge";
import { Charge } from "store/types/store/state/admin/charge";

export const [
    GET_CHARGES_REQUEST,
    SET_CHARGES_REQUEST,
    CREATE_CHARGES_REQUEST,
    UPDATE_CHARGES_REQUEST,
    DELETE_CHARGES_REQUEST,
] = [
    createAction<RequestPayload>(ChargeActionState.GET_CHARGES_REQUEST),
    createAction<Array<Charge>>(ChargeActionState.SET_CHARGES_REQUEST),
    createAction<Charge>(ChargeActionState.CREATE_CHARGES_REQUEST),
    createAction<Charge>(ChargeActionState.UPDATE_CHARGES_REQUEST),
    createAction(ChargeActionState.DELETE_CHARGES_REQUEST),
];
