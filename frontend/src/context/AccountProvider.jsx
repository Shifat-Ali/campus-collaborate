import { createContext, useState, useRef, useEffect } from "react";
export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [user, setUser] = useState(0);
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {}, [user,userProfile]);
  return (
    <AccountContext.Provider
      value={{
        user,
        setUser,
        userProfile,
        setUserProfile
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
