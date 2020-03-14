import React from "react";
import Login from "./components/Login";
import Layout from "./components/Layout";
import { getAccount } from "./utils/Auth";
import TopMenu from "./components/TopMenu";
import "./App.css";
import { useStoreState } from "./store/Hooks";

function App() {
  const account = getAccount();
  const tenantId = useStoreState(store => store.selection.tenantId);
  const mustLogin = !account || tenantId === "common";

  return (
    <div className="bp3-dark">
      {mustLogin && <Login initialLoading={!!getAccount()} />}
      <TopMenu />
      <Layout />
    </div>
  );
}

export default App;
