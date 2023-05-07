import { createAction } from "@reduxjs/toolkit";
import { RequestPayload } from "store/types/api/http";
import { VehicleActionState } from "store/types/store/action/admin/vehicle";
import { Vehicle } from "store/types/store/state/admin/vehicle";

export const [
    GET_VEHICLES_REQUEST,
    SET_VEHICLES_REQUEST,
    CREATE_VEHICLES_REQUEST,
    UPDATE_VEHICLES_REQUEST,
    DELETE_VEHICLES_REQUEST,
] = [
    createAction<RequestPayload>(VehicleActionState.GET_VEHICLES_REQUEST),
    createAction<Array<Vehicle>>(VehicleActionState.SET_VEHICLES_REQUEST),
    createAction<Vehicle>(VehicleActionState.CREATE_VEHICLES_REQUEST),
    createAction<Vehicle>(VehicleActionState.UPDATE_VEHICLES_REQUEST),
    createAction(VehicleActionState.DELETE_VEHICLES_REQUEST),
];
