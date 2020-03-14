import { SelectionModel, StoreModel } from "./Types";
import { action } from "easy-peasy";

const [tenantId, subscriptionId] = window.location.hash
  .replace(/^#/, "")
  .split("/");

const userModel: SelectionModel = {
  tenantId: tenantId || "common",
  setTenantId: action((state, payload) => {
    state.tenantId = payload;
  }),
  subscriptionId,
  setSubscriptionId: action((state, payload) => {
    state.subscriptionId = payload;
  })
};

const storeModel: StoreModel = {
  selection: userModel
};

export default storeModel;
