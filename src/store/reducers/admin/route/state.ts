import { RouteState } from "store/types/store/state/admin/route";

export const initialState: RouteState = {
    items: [
        {
            id: 0,
            descricao: '',
            veiculo_id: 0,
            created_at: null,
            updated_at: null
        }
    ],
};