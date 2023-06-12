import { ColabState } from "store/types/store/state/admin/colab";

export const initialState: ColabState = {
    items: [
        {
            id: 0,
            name: '',
            email: '',
            tipo_usuario_id: 0,
            email_verified_at: null,
            created_at: null,
            updated_at: null
        }
    ],
};