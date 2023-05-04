export interface TipoUsuario {
    descricao: string;
}

export interface User {
    id: number,
    name: string,
    email: string,
    email_verified_at: Date | null,
    tipo_usuario: TipoUsuario,
    created_at: Date,
    updated_at: Date,
}

export interface AuthItem {
    user: User;
    token: string;
}

export interface AuthState {
    message: string;
    item: AuthItem;
}
