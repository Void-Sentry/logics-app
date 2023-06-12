import { AddressState } from "store/types/store/state/admin/address";

export const initialState: AddressState = {
    items: [
        {
            id: 0,
            bairro: '',
            cidade: '',
            estado: '',
            numero: 0,
            rota_id: 0,
            created_at: null,
            updated_at: null,
        }
    ],
};