import { getToken } from "./Auth";
import {
  ODataResponse,
  Tenant,
  Subscription,
  Resource,
  Function
} from "./ApiTypes";

export async function get<T>(url: string) {
  const endpoint = `https://management.azure.com/${url}`;
  const headers = await getHeaders();
  const result = await fetch(endpoint, {
    method: "GET",
    mode: "cors",
    headers
  }).then<T>(res => res.json());
  return result;
}

export async function getHeaders() {
  const token = await getToken();
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  };
}

export const listTenants = async () => {
  const tenants = await get<ODataResponse<Tenant>>(
    "tenants?api-version=2019-11-01"
  );
  return tenants.value;
};

export const listSubscriptions = async () => {
  const tenants = await get<ODataResponse<Subscription>>(
    "subscriptions?api-version=2019-11-01"
  );
  return tenants.value;
};

export const listFunctionResources = async (subscriptionId: string) => {
  const subscriptions = await get<ODataResponse<Resource>>(
    `subscriptions/${subscriptionId}/resources?api-version=2019-10-01&$filter=resourceType eq 'Microsoft.Web/sites'`
  );
  return subscriptions.value.filter(s => s.kind === "functionapp");
};

export const listFunctions = async (appId: string) => {
  const functions = await get<ODataResponse<Function>>(
    `${appId}/functions?api-version=2019-08-01`
  );

  return functions.value;
};

// POST https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/appsettings/list?api-version=2019-08-01

// PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/appsettings?api-version=2019-08-01

// properties["AzureWebJobs.{Name}.Disabled"] = "true"
