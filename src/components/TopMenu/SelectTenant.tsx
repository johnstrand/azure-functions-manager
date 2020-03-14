import React, { useEffect, useState } from "react";
import { useStoreState } from "../../store/Hooks";
import { Dialog, Button, ButtonGroup, Spinner } from "@blueprintjs/core";
import DialogHeader from "../Generic/DialogHeader";
import DialogBody from "../Generic/DialogBody";
import { listTenants } from "../../utils/Api";
import { getAccount } from "../../utils/Auth";
import { Tenant } from "../../utils/ApiTypes";

const SelectTenant = () => {
  const mustLogin = getAccount() === null;
  const tenantId = useStoreState(state => state.selection.tenantId);

  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(!mustLogin && tenantId === "common");
  const [tenants, setTenants] = useState<Tenant[]>([]);

  useEffect(() => {
    if (mustLogin) {
      return;
    }
    setLoading(true);
    listTenants().then(result => {
      setTenants(result);
      setLoading(false);
    });
  }, [mustLogin, setTenants]);

  const title =
    mustLogin || tenantId === "common"
      ? "Login required"
      : tenants.find(t => t.tenantId === tenantId)?.displayName;

  const onSelectTenant = (id: string) => {
    window.location.href = `#${id}`;
    window.location.reload();
  };

  return (
    <>
      <Button loading={tenants.length === 0} onClick={() => setOpen(true)}>
        Tenant: {title}
      </Button>
      <Dialog isOpen={open} className="bp3-dark">
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
    </>
  );
};

export default SelectTenant;
