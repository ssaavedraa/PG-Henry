import axios from "axios";
import { useCallback, useContext } from "react";
import AuthContext, { initalUser } from "../auth/authContext";
import userLogin from "../auth/utils/userLogin";
import userRegister from "../auth/utils/userRegister";
import userReset from "../auth/utils/userReset";
import userVerify from "../auth/utils/userVerify";
import useCart from "./useCart.js";

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);
  const { removeAll, add } = useCart();
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
      const paintings = JSON.parse(localStorage.getItem("painting"));
      removeAll();
      const res = await userLogin(user, setUser);
      if (res.status === "ok") {
        if (paintings) {
          add(paintings);
        }
        const dbCart = await axios.get("/cart/getAll");
        if (Array.isArray(dbCart.data)) {
          add(dbCart.data);
        }
        return res.user;
      } else throw new Error(res);
    },
    [setUser, add, removeAll]
  );
  const logout = useCallback(() => {
    setUser(initalUser);
    userReset();
    removeAll();
  }, [setUser, removeAll]);
  const verifyMail = async (token) => {
    try {
      const user = await userVerify(token);
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return { ...user, register, login, logout, verifyMail };
}
