import { getToken } from "./Auth";
import { ODataResponse, Tenant } from "./ApiTypes";

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