import axios from "axios";
import userSet from "./userSet";

const userLogin = async (user, setUser) => {
  setUser((prevUser) => {
    return { ...prevUser, isLoading: true };
  });
  try {
    const { data } = await axios.post("/user/login", user);
    if (data.status === "error") throw new Error(data.message);
    userSet(data.token);
    setUser((prevUser) => {
      return { ...prevUser, user: data.user, isLoading: false };
    });
    return data;
  } catch (err) {
    setUser((prevUser) => {
      return { ...prevUser, isLoading: false };
    });
    return err.message;
  }
};

export default userLogin;
