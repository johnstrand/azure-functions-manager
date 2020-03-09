import React from "react";
import { Classes } from "@blueprintjs/core";

interface Props {
  children: React.ReactNode;
}

const DialogFooter = ({ children }: Props) => {
  return (
    <div className={Classes.DIALOG_FOOTER}>
      <div className={Classes.DIALOG_FOOTER_ACTIONS}>{children}</div>
    </div>
  );
};

export default DialogFooter;
