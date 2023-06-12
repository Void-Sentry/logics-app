import { createAction } from "@reduxjs/toolkit";
import { RequestPayload } from "store/types/api/http";
import { AddressActionState } from "store/types/store/action/admin/address";
import { Address } from "store/types/store/state/admin/address";

export const [
    GET_ADDRESS_REQUEST,
    SET_ADDRESS_REQUEST,
    CREATE_ADDRESS_REQUEST,
    UPDATE_ADDRESS_REQUEST,
    DELETE_ADDRESS_REQUEST,
] = [
    createAction<RequestPayload>(AddressActionState.GET_ADDRESS_REQUEST),
    createAction<Array<Address>>(AddressActionState.SET_ADDRESS_REQUEST),
    createAction<Address>(AddressActionState.CREATE_ADDRESS_REQUEST),
    createAction<Address>(AddressActionState.UPDATE_ADDRESS_REQUEST),
    createAction(AddressActionState.DELETE_ADDRESS_REQUEST),
];
