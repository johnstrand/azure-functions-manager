import { getToken } from "./Auth";
import { ODataResponse, Tenant, Subscription } from "./ApiTypes";

export async function get<T>(url: string, authority: string) {
  const endpoint = `https://management.azure.com/${url}`;
  const headers = await getHeaders(authority);
  const result = await fetch(endpoint, {
    method: "GET",
    mode: "cors",
    headers
  }).then<T>(res => res.json());
  return result;
}

export async function getHeaders(authority: string) {
  const token = await getToken(authority);
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  };
}

export const listTenants = async (authority: string) => {
  const tenants = await get<ODataResponse<Tenant>>(
    "tenants?api-version=2019-11-01",
    authority
  );
  return tenants.value;
};

export const listSubscriptions = async (authority: string) => {
  const tenants = await get<ODataResponse<Subscription>>(
    "subscriptions?api-version=2019-11-01",
    authority
  );
  return tenants.value;
};
