export interface Colab {
    id: number;
    name: string;
    email: string;
    tipo_usuario_id: number;
    email_verified_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
}

export interface ColabState {
    items: Array<Colab>;
}