import React, { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "../../store/Hooks";
import { listSubscriptions } from "../../utils/Api";
import { getAccount } from "../../utils/Auth";
import Dropdown from "../Generic/Dropdown";
import { Subscription } from "../../utils/ApiTypes";

const SelectSubscription = () => {
  const { tenantId, subscriptionId } = useStoreState(state => ({
    tenantId: state.selection.tenantId,
    subscriptionId: state.selection.subscriptionId
  }));

  const setSubscriptionId = useStoreActions(
    state => state.selection.setSubscriptionId
  );

  const mustLogin = getAccount() === null || tenantId === "common";

  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  if (subscriptionId) {
    window.location.hash = [tenantId, subscriptionId].join("/");
  }

  useEffect(() => {
    if (mustLogin || tenantId === "common") {
      return;
    }

    setLoading(true);

    listSubscriptions().then(result => {
      setLoading(false);
      setSubscriptions(result);
      if (result.length) {
        setSubscriptionId(result[0].subscriptionId);
      }
    });
  }, [mustLogin, setSubscriptionId, tenantId]);

  const items = subscriptions.map(s => ({
    key: s.subscriptionId,
    value: s.subscriptionId,
    text: s.displayName
  }));

  return (
    <Dropdown<string>
      items={items}
      loading={mustLogin || loading}
      noData="No subscriptions"
      value={subscriptionId}
      onChange={id => setSubscriptionId(id)}
    />
  );
};

export default SelectSubscription;
