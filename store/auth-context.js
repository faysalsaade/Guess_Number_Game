import { createContext, useState } from "react";
export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logOut: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  function authenticate(token) {
    setAuthToken(token);
  }
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;
