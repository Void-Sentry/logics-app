import { Abstract } from "../generic/abstract";

export interface Charge extends Abstract {
}

export interface ChargeState {
    items: Array<Charge>;
}