import React, { useState } from "react";
import { getToken } from "../utils/Auth";
import { Dialog, Spinner, Button } from "@blueprintjs/core";
import DialogBody from "./Generic/DialogBody";
import DialogHeader from "./Generic/DialogHeader";

interface Props {
  initialLoading: boolean;
}

const Login = (props: Props) => {
  const [loading, setLoading] = useState(props.initialLoading);

  const login = () => {
    setLoading(true);
    getToken("common")
      .then(_ => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        alert("Log in failed, please refresh the page and try again");
      });
  };

  return (
    <Dialog isOpen isCloseButtonShown={false} className="bp3-dark">
      <DialogHeader>Log in required</DialogHeader>
      <DialogBody>
        {!loading && <h2>Please click the button below to log in</h2>}
        {loading && <h2>Logging you in</h2>}
        {loading && <Spinner intent="success" size={100} />}
        <Button disabled={loading} onClick={login}>
          Log in
        </Button>
      </DialogBody>
    </Dialog>
  );
};

export default Login;
