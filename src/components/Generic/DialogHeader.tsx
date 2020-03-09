import React from "react";
import { Classes } from "@blueprintjs/core";

interface Props {
  children: React.ReactNode;
}

const DialogHeader = ({ children }: Props) => {
  return <div className={Classes.DIALOG_HEADER}>{children}</div>;
};

export default DialogHeader;
