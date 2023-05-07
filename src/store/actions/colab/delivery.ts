import { createAction } from "@reduxjs/toolkit";
import { RequestPayload } from "store/types/api/http";
import { DeliveryActionState } from "store/types/store/action/colab/delivery";
import { Delivery } from "store/types/store/state/colab/delivery";

export const [
    GET_DELIVERIES_REQUEST,
    SET_DELIVERIES_REQUEST,
    CREATE_DELIVERIES_REQUEST,
    UPDATE_DELIVERIES_REQUEST,
    DELETE_DELIVERIES_REQUEST,
] = [
    createAction<RequestPayload>(DeliveryActionState.GET_DELIVERIES_REQUEST),
    createAction<Array<Delivery>>(DeliveryActionState.SET_DELIVERIES_REQUEST),
    createAction<Delivery>(DeliveryActionState.CREATE_DELIVERIES_REQUEST),
    createAction<Delivery>(DeliveryActionState.UPDATE_DELIVERIES_REQUEST),
    createAction(DeliveryActionState.DELETE_DELIVERIES_REQUEST),
];
