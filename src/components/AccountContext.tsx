import React, { createContext, useState, useEffect } from "react";
import { Account } from "msal";
import { getAccount, getToken } from "../utils/Auth";

type NullableAccount = Account | null;
type NullableCallback = (() => void) | null;
type AccountContextType = [NullableAccount, NullableCallback];

export const AccountContext = createContext<AccountContextType>([null, null]);

interface Props {
  children: React.ReactChild;
}

export const AccountContextWrapper = (props: Props) => {
  const [account, setAccount] = useState<NullableAccount>(null);

  useEffect(() => {
    getToken()
      .catch(err => {})
      .then(s => {
        if (!s) {
          setAccount(null);
          return;
        }
        setAccount(getAccount());
      });
  }, []);

  return (
    <AccountContext.Provider value={[account, () => setAccount(getAccount())]}>
      {props.children}
    </AccountContext.Provider>
  );
};
