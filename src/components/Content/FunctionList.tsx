import React, { useEffect } from "react";
import useHash from "../../utils/UseHash";
import useAsync, { AsyncState } from "react-hooks-useasync";
import { listFunctionResources } from "../../utils/Api";
import FunctionListItem from "./FunctionListItem";

const FunctionList = () => {
  const [, subscriptionId] = useHash().split("/");
  const [resources, state, loadResources] = useAsync(listFunctionResources, []);

  useEffect(() => {
    if (subscriptionId) {
      loadResources(subscriptionId);
    }
  }, [loadResources, subscriptionId]);

  if (state === AsyncState.Pending) {
    return <div>Loading functions...</div>;
  }

  return (
    <div>
      {resources
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map(resource => (
          <FunctionListItem resource={resource} key={resource.id} />
        ))}
    </div>
  );
};

export default FunctionList;
