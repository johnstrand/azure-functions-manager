export interface ODataResponse<T> {
  value: T[];
  count: number;
}

export interface Tenant {
  id: string;
  tenantId: string;
  countryCode: string;
  displayName: string;
  domains: string[];
  tenantCategory: string;
}

export interface Subscription {
  id: string;
  authorizationSource: string;
  managedByTenants: any[];
  subscriptionId: string;
  tenantId: string;
  displayName: string;
  state: string;
  subscriptionPolicies: SubscriptionPolicies;
}

export interface SubscriptionPolicies {
  locationPlacementId: string;
  quotaId: string;
  spendingLimit: string;
}
