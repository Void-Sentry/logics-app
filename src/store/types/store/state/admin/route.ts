export interface Route {
    id: number;
    descricao: string;
    carga_id: number;
    veiculo_id: number;
    created_at: Date;
    updated_at: Date;
}

export interface RouteState {
    items: Array<Route>;
}
