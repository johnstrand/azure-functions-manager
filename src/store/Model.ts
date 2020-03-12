import { SelectionModel, StoreModel } from "./Types";
import { action } from "easy-peasy";

const userModel: SelectionModel = {
  tenantId: null,
  setTenantId: action((state, payload) => {
    state.tenantId = payload;
  }),
  tenants: [],
  setTenants: action((state, payload) => {
    state.tenants = payload;
  })
};

const storeModel: StoreModel = {
  selection: userModel
};

export default storeModel;
