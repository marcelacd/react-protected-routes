import React, { useState } from "react";
import { loginContext } from "./LoginContext";

export const StateLogin = ({ children }) => {

  const [login, setLogin] = useState({
    name: "Marcela",
    lastName: "Carmona",
    isLogin: false,
  });

  const loginUser = () => {
    setLogin({
      ...login,
      isLogin: !login.isLogin,
    });
  };

  console.log(login)

  return (
    <loginContext.Provider
      value={{
        login,
        loginUser,
      }}
    >
      {children}
    </loginContext.Provider>
  );
};

export default StateLogin;
