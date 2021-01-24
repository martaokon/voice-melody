import { Notification } from "components/Notification";
import React, { createContext, useState, useMemo } from "react";
import { checkToken, login, logout, register } from "utils/apiClient";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [isLoginError, setIsLoginError] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const isAuthenticated = useMemo(() => !!username || checkToken(setUsername), [
    username,
  ]);

  const handleLogout = () => {
    setUsername(null);
    logout();
  };

  const handleLogin = async (username, password) => {
    try {
      await login({ username, password });
      setUsername(username);
    } catch (error) {
      setIsLoginError(true);
      throw error;
    }
  };

  const handleRegister = async ({ username, email, password }) => {
    setRegisterError(null);
    try {
      await register({ username, email, password });
      setUsername(username);
    } catch (error) {
      setRegisterError(error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        registerError,
        handleRegister,
        isAuthenticated,
        handleLogout,
        handleLogin,
      }}
    >
      {children}
      <Notification
        setOpen={setIsLoginError}
        open={!!isLoginError}
        text={"Incorrect login or password"}
        severity="error"
      />
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
