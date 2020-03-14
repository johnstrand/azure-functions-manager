import React, { useState } from "react";
import { getToken, getAccount } from "../utils/Auth";
import { Dialog, Spinner, Button } from "@blueprintjs/core";
import DialogBody from "./Generic/DialogBody";
import DialogHeader from "./Generic/DialogHeader";

interface Props {
  initialLoading: boolean;
}

const Login = (props: Props) => {
  const [loading, setLoading] = useState(props.initialLoading);
  const [open, setOpen] = useState(getAccount() === null);

  const login = () => {
    setLoading(true);
    getToken()
      .then(_ => {
        setLoading(false);
        setOpen(false);
      })
      .catch(() => {
        setLoading(false);
        alert("Log in failed, please refresh the page and try again");
      });
  };

  return (
    <Dialog isOpen={open} className="bp3-dark">
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
