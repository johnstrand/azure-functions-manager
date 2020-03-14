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

export interface Resource {
  id: string;
  name: string;
  type: string;
  kind: string;
  location: string;
  tags?: { [key: string]: string };
  identity?: Identity;
}

export interface Identity {
  principalId: string;
  tenantId: string;
  type: string;
}

export interface Function {
  id: string;
  name: string;
  type: string;
  location: Location;
  properties: Properties;
}

export interface Properties {
  name: string;
  function_app_id: string;
  script_root_path_href: string;
  script_href: string;
  config_href: string;
  test_data_href: string;
  secrets_file_href: string;
  href: string;
  config: Config;
  files: null | string[];
  test_data: string;
  invoke_url_template: null | string;
  language: string;
  isDisabled: boolean;
}

export interface Config {
  generatedBy: string;
  configurationSource: string;
  bindings: Binding[];
  disabled: boolean;
  scriptFile: string;
  entryPoint: string;
}

export interface Binding {
  type: string;
  connection?: string;
  topicName?: string;
  subscriptionName?: string;
  name: string;
  methods?: string[];
  authLevel?: string;
  queueName?: string;
}
