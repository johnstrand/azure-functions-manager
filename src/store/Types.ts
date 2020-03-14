import { Action } from "easy-peasy";

export interface SelectionModel {
  tenantId: string;
  setTenantId: Action<SelectionModel, string>;
  subscriptionId?: string;
  setSubscriptionId: Action<SelectionModel, string>;
}

export interface StoreModel {
  selection: SelectionModel;
}
