import React, { createContext, useState } from "react";

const AuthContext = createContext<string>("");

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setuser] = useState("second");
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);
