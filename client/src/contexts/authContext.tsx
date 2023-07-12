import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import React from "react";
import { AuthContextType, AuthData } from "@/interfaces/interfaces";

type Props = {
  children?: ReactNode;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useLocalStorage("auth", {});

  const userLogin = (authData: AuthData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    localStorage.clear();
    setAuth(false);
  };

  const authContextValue: AuthContextType = {
    user: auth,
    userLogin,
    userLogout,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
