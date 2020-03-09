import { Tenant } from "../utils/ApiTypes";
import { Action } from "easy-peasy";

export interface UserModel {
  tenants: Tenant[];
  setTenants: Action<UserModel, Tenant[]>;
  tenantId: string | null;
  setTenantId: Action<UserModel, string>;
}

export interface StoreModel {
  user: UserModel;
}
