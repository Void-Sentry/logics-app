export interface Address {
    id: number;
    cidade: string;
    bairro: string;
    estado: string;
    numero: number;
    rota_id: number;
    created_at: Date;
    updated_at: Date;
}

export interface AddressState {
    items: Array<Address>;
}
