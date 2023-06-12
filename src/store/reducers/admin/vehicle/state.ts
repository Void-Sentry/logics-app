import { VehicleState } from "store/types/store/state/admin/vehicle";

export const initialState: VehicleState = {
    items: [
        {
            id: 0,
            placa: '',
            entregas: [],
            capacidade: 0,
            descricao: '',
            usuario_id: 0,
            created_at: null,
            updated_at: null,
        }
    ],
};