import React from "react";
import { Classes } from "@blueprintjs/core";

interface Props {
  children: React.ReactNode;
}

const DialogBody = ({ children }: Props) => {
  return <div className={Classes.DIALOG_BODY}>{children}</div>;
};

export default DialogBody;
