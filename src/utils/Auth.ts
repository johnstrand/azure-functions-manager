import {
  Configuration,
  UserAgentApplication,
  AuthenticationParameters
} from "msal";
import store from "../store";

const tenantId = store.getState().selection.tenantId;

const msalConfig: Configuration = {
  auth: {
    clientId: "6b022eaa-903c-4743-b55e-2e212164eee1",
    authority: `https://login.microsoftonline.com/${tenantId}`,
    validateAuthority: true
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false
  }
};

export enum scopes {
  azure = "https://management.azure.com/user_impersonation"
}

const requiresInteraction = (errorMessage: string) => {
  if (!errorMessage || !errorMessage.length) {
    return false;
  }

  return (
    errorMessage.indexOf("consent_required") !== -1 ||
    errorMessage.indexOf("interaction_required") !== -1 ||
    errorMessage.indexOf("login_required") !== -1
  );
};

const app = new UserAgentApplication(msalConfig);

export function getAccount() {
  return app.getAccount();
}

export async function getToken(): Promise<string> {
  const request: AuthenticationParameters = {
    scopes: [scopes.azure],
    authority: `https://login.microsoftonline.com/${tenantId}`,
    redirectUri: "http://localhost:3000/auth.html"
  };
  if (!app.getAccount() && !app.getLoginInProgress()) {
    await app.loginPopup(request);
  }
  try {
    return (await app.acquireTokenSilent(request)).accessToken;
  } catch (error) {
    if (requiresInteraction(error) || error.errorCode === "consent_required") {
      return (await app.acquireTokenPopup(request)).accessToken;
    } else {
      alert("Non-interactive error: " + error.errorCode);
      return "";
    }
  }
}
