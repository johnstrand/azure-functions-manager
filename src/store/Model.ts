import { UserModel, StoreModel } from "./Types";
import { action } from "easy-peasy";

const userModel: UserModel = {
  tenantId: null,
  setTenantId: action((state, payload) => {
    state.tenantId = payload;
  }),
  tenants: [],
  setTenants: action((state, payload) => {
    state.tenants = payload;
    if (payload.length) {
      state.tenantId = payload[0].tenantId;
    }
  })
};

const storeModel: StoreModel = {
  user: userModel
};

export default storeModel;
