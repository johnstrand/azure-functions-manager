import React, { useState, useEffect } from "react";
import { Resource } from "../../utils/ApiTypes";
import { Button, Collapse, HTMLTable, Switch } from "@blueprintjs/core";
import useAsync, { AsyncState } from "react-hooks-useasync";
import { listFunctions } from "../../utils/Api";

interface Props {
  resource: Resource;
}

const FunctionListItem = ({ resource }: Props) => {
  const [open, setOpen] = useState(false);
  const [functions, state, loadFunctions] = useAsync(listFunctions, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    loadFunctions(resource.id);
  }, [loadFunctions, open, resource.id]);

  return (
    <div>
      <Button
        loading={state === AsyncState.Pending}
        minimal
        large
        onClick={() => setOpen(!open)}
      >
        {resource.name}
      </Button>
      <Collapse
        isOpen={open && state !== AsyncState.Pending}
        keepChildrenMounted
      >
        <HTMLTable striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Binding</th>
            </tr>
          </thead>
          <tbody>
            {functions.map(f => (
              <tr key={f.id}>
                <td>{f.properties.name}</td>
                <td>
                  <Switch checked={!f.properties.isDisabled} />
                </td>
                <td>{f.properties.config.bindings[0].type}</td>
              </tr>
            ))}
          </tbody>
        </HTMLTable>
      </Collapse>
      <hr />
    </div>
  );
};

export default FunctionListItem;
