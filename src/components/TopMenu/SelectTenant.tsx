import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "../../store/Hooks";
import Dropdown from "../Generic/Dropdown";
import { listTenants } from "../../utils/Api";

const SelectTenant = () => {
  const { tenants, tenantId } = useStoreState(state => ({
    tenants: state.user.tenants,
    tenantId: state.user.tenantId
  }));

  const { setTenants, setTenantId } = useStoreActions(state => ({
    setTenants: state.user.setTenants,
    setTenantId: state.user.setTenantId
  }));

  useEffect(() => {
    listTenants().then(result => {
      setTenants(result);
      if (result.length) {
        setTenantId(result[0].tenantId);
      }
    });
  }, [setTenants, setTenantId]);

  const items = tenants.map(t => ({
    key: t.tenantId,
    value: t.tenantId,
    text: `${t.displayName} (${t.domains[t.domains.length - 1]})`
  }));

  return (
    <Dropdown<string>
      loading={false}
      value={tenantId || undefined}
      items={items}
      onChange={setTenantId}
      noData="No Azure tenants found"
    />
  );
};

export default SelectTenant;
