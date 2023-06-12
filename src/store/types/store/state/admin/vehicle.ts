import { Delivery } from "../colab/delivery";
import { Abstract } from "../generic/abstract";

export interface Vehicle extends Abstract {
    id: number;
    placa: string;
    capacidade: number;
    usuario_id: number;
    entregas: Array<Delivery>;
    created_at: Date;
    updated_at: Date;
}

export interface VehicleState {
    items: Array<Vehicle>;
}