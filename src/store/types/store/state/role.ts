import { Abstract } from "./generic/abstract";

export interface Role extends Abstract {
}

export interface RoleState {
    items: Array<Role>;
}