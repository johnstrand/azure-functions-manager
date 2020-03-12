import React, { useEffect } from "react";
import { useStoreState } from "../../store/Hooks";
import { listSubscriptions } from "../../utils/Api";

const SelectSubscription = () => {
  const { tenantId } = useStoreState(state => ({
    tenantId: state.selection.tenantId
  }));

  useEffect(() => {
    if (!tenantId) {
      return;
    }

    listSubscriptions(tenantId).then(result => {
      console.log(result);
    });
  }, [tenantId]);

  return <div>{"Hello world"}</div>;
};

export default SelectSubscription;
