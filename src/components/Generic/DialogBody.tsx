import React from "react";
import { Classes } from "@blueprintjs/core";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const DialogBody = ({ children, style }: Props) => {
  return (
    <div style={style} className={Classes.DIALOG_BODY}>
      {children}
    </div>
  );
};

export default DialogBody;
