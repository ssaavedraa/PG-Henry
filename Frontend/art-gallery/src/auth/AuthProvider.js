import { useEffect, useState } from "react";
import userGet from "./utils/userGet";
import userReset from "./utils/userReset";
import AuthContext, { initalUser } from "./authContext";

function AuthProvider({ children }) {
  const [user, setUser] = useState({ ...initalUser, isLoading: true });
  const value = { user, setUser };

  useEffect(() => {
    setUser((prev) => {
      return { ...prev, isLoading: true };
    });
    userGet()
      .then((user) => {
        setUser((prev) => {
          return { ...prev, user, isLoading: false };
        });
      })
      .catch(() => {
        userReset();
        setUser((prev) => {
          return { ...prev, isLoading: false };
        });
      });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
