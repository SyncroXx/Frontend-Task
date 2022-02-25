import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAccountInsight } from "../utils";

export const AccountContext = React.createContext({
  account: {},
  accountInsight: {},
  loading: true,
});

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [accountInsight, setAccountInsight] = useState();
  const [mortgage, setMortgage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const API_URL = "/api/account";
    try {
      const fetchAccount = async () => {
        const result = await axios(API_URL);
        setAccount(result.data.account);
        const accountInsight = getAccountInsight(result.data.account);
        setAccountInsight(accountInsight);
        setIsLoading(false);
      };
      fetchAccount();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <AccountContext.Provider value={{ account, accountInsight, isLoading }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
