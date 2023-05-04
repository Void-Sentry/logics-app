import { AuthState } from './auth'
import { RoleState } from './role';

export interface rootState {
    auth: AuthState;
    role: RoleState;
}