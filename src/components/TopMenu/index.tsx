import React from "react";
import { Navbar, Button } from "@blueprintjs/core";
import SelectSubscription from "./SelectSubscription";
import { useStoreActions } from "../../store/Hooks";

const TopMenu = () => {
  const setTenantId = useStoreActions(store => store.selection.setTenantId);
  return (
    <Navbar>
      <Navbar.Group>
        <Navbar.Heading>Azure Function Manager</Navbar.Heading>
        <Navbar.Divider />
        <Navbar.Heading>
          <Button onClick={() => setTenantId("")}>Switch tenant</Button>
        </Navbar.Heading>
        <Navbar.Heading>
          <SelectSubscription />
        </Navbar.Heading>
      </Navbar.Group>
    </Navbar>
  );
};

export default TopMenu;
