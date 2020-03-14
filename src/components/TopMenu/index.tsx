import React from "react";
import { Navbar } from "@blueprintjs/core";
import SelectSubscription from "./SelectSubscription";
import SelectTenant from "./SelectTenant";

const TopMenu = () => {
  return (
    <Navbar>
      <Navbar.Group>
        <Navbar.Heading>Azure Function Manager</Navbar.Heading>
        <Navbar.Divider />
        <Navbar.Heading>
          <SelectTenant />
        </Navbar.Heading>
        <Navbar.Heading>
          <SelectSubscription />
        </Navbar.Heading>
      </Navbar.Group>
    </Navbar>
  );
};

export default TopMenu;
