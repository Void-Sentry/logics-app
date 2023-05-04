import { AuthState } from "store/types/store/state/auth";

export const initialState: AuthState = {
    message: '',
    item: {
        user: {
            id: 0,
            name: '',
            email: '',
            email_verified_at: null,
            tipo_usuario: { descricao: '' },
            created_at: new Date(),
            updated_at: new Date()
        },
        token: ''
    },
};