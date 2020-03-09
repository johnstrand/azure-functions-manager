export interface ODataResponse<T> {
  value: T[];
}

export interface Tenant {
  id: string;
  tenantId: string;
  countryCode: string;
  displayName: string;
  domains: string[];
  tenantCategory: string;
}
