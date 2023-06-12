export interface Route {
    id: number;
    descricao: string;
    veiculo_id: number;
    created_at: Date | null;
    updated_at: Date | null;
}

export interface RouteState {
    items: Array<Route>;
}
