import React, { useContext } from "react";
import Login from "./components/Login";
import Layout from "./components/Layout";
import { AccountContext } from "./components/AccountContext";
import { getAccount } from "./utils/Auth";
import TopMenu from "./components/TopMenu";
import "./App.css";
import SelectTenant from "./components/TopMenu/SelectTenant";
import { useStoreState } from "./store/Hooks";

function App() {
  const [account] = useContext(AccountContext);
  const tenantId = useStoreState(store => store.selection.tenantId);
  console.log(tenantId);
  return (
    <div className="bp3-dark">
      {!account && <Login initialLoading={!!getAccount()} />}
      {account && !tenantId && <SelectTenant />}
      <TopMenu />
      <Layout />
    </div>
  );
}

export default App;
