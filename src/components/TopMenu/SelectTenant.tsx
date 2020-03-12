import React, { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "../../store/Hooks";
import { Dialog, Button, ButtonGroup, Spinner } from "@blueprintjs/core";
import DialogHeader from "../Generic/DialogHeader";
import DialogBody from "../Generic/DialogBody";
import { listTenants } from "../../utils/Api";
import { getToken } from "../../utils/Auth";

const SelectTenant = () => {
  const [loading, setLoading] = useState(true);
  const { tenants } = useStoreState(state => ({
    tenants: state.selection.tenants,
    tenantId: state.selection.tenantId
  }));

  const { setTenants, setTenantId } = React.useRef(
    useStoreActions(state => ({
      setTenants: state.selection.setTenants,
      setTenantId: state.selection.setTenantId
    }))
  ).current;

  useEffect(() => {
    setLoading(true);
    setTenants([]);
  }, [setLoading, setTenants]);

  useEffect(() => {
    listTenants("common").then(result => {
      setTenants(result);
      setLoading(false);
    });
  }, [setTenants]);

  const onSelectTenant = (id: string) => {
    getToken(id).then(() => {
      setTenantId(id);
    });
  };

  return (
    <Dialog isOpen isCloseButtonShown={false} className="bp3-dark">
      <DialogHeader>Select tenant</DialogHeader>
      <DialogBody style={{ textAlign: "center" }}>
        {loading && <h2>Loading tenants</h2>}
        {loading && <Spinner intent="success" size={100} />}
        <ButtonGroup vertical minimal large alignText="center">
          {tenants.map(tenant => (
            <div key={tenant.tenantId}>
              <Button onClick={() => onSelectTenant(tenant.tenantId)}>
                {tenant.displayName} (
                {tenant.domains[tenant.domains.length - 1]})
              </Button>
            </div>
          ))}
        </ButtonGroup>
      </DialogBody>
    </Dialog>
  );
};

export default SelectTenant;
