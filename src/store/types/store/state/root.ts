import { AddressState } from './admin/address';
import { ChargeState } from './admin/charge';
import { ColabState } from './admin/colab';
import { RouteState } from './admin/route';
import { VehicleState } from './admin/vehicle';
import { AuthState } from './auth'
import { DeliveryState } from './colab/delivery';
import { RoleState } from './role';

export interface rootState {
    auth: AuthState;
    role: RoleState;
    charge: ChargeState;
    colab: ColabState;
    route: RouteState;
    vehicle: VehicleState;
    delivery: DeliveryState;
    address: AddressState;
}