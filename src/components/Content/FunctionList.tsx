import React from "react";
import useHash from "../../utils/UseHash";

const FunctionList = () => {
  const tenantId = useHash();
  return <div>{tenantId}</div>;
};

export default FunctionList;
