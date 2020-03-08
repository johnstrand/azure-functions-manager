import React, { useContext } from "react";
import Login from "./components/Login";
import Layout from "./components/Layout";
import { AccountContext } from "./components/AccountContext";
import { getAccount } from "./utils/Auth";
import TopMenu from "./components/TopMenu";
import "./App.css";

function App() {
  const [account] = useContext(AccountContext);
  return (
    <div className="bp3-dark">
      {!account && <Login initialLoading={!!getAccount()} />}
      <TopMenu />
      <Layout />
    </div>
  );
}

export default App;
