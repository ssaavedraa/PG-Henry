import { useCallback, useContext } from "react";
import AuthContext, { initalUser } from "../auth/authContext";
import userLogin from "../auth/utils/userLogin";
import userRegister from "../auth/utils/userRegister";
import userReset from "../auth/utils/userReset";

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);
  const register = useCallback(
    async (user) => {
      const res = await userRegister(user, setUser);
      if (res.status === "ok") return res.user;
      else throw new Error(res);
    },
    [setUser]
  );
  const login = useCallback(
    async (user) => {
      const res = await userLogin(user, setUser);
      if (res.status === "ok") return res.user;
      else throw new Error(res);
    },
    [setUser]
  );
  const logout = useCallback(() => {
    setUser(initalUser);
    userReset();
  }, [setUser]);

  return { ...user, register, login, logout };
}
