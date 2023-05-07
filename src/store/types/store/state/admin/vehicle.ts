import { Abstract } from "../generic/abstract";

export interface Vehicle extends Abstract {
    id: number;
    placa: number;
    capacidade: number;
    usuario_id: number;
    created_at: Date;
    updated_at: Date;
}

export interface VehicleState {
    items: Array<Vehicle>;
}