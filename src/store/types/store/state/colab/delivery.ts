import { Abstract } from "../generic/abstract";

export interface Delivery extends Abstract {
    id: number;
    descricao: string;
    carga_id: number;
    veiculo_id: number;
    created_at: Date;
    updated_at: Date;
}

export interface DeliveryState {
    items: Array<Delivery>;
}