import { Tenant } from "../utils/ApiTypes";
import { Action } from "easy-peasy";

export interface SelectionModel {
  tenants: Tenant[];
  setTenants: Action<SelectionModel, Tenant[]>;
  tenantId: string | null;
  setTenantId: Action<SelectionModel, string>;
}

export interface StoreModel {
  selection: SelectionModel;
}
