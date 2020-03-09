import React from "react";
import { Navbar } from "@blueprintjs/core";
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
      </Navbar.Group>
    </Navbar>
  );
};

export default TopMenu;
