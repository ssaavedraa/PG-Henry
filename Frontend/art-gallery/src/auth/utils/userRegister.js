import axios from "axios";
import userSet from "./userSet";

const userRegister = async (user, setUser) => {
  setUser((prevUser) => {
    return { ...prevUser, isLoading: true };
  });
  try {
    const { data } = await axios.post(
      "/user/register",
      user
    );
    if (data.status === "error") throw new Error(data.message);
    userSet(data.token);
    setUser((prevUser) => {
      return { ...prevUser, user: data.user, isLoading: false };
    });
    return { status: data.status, user: data.user };
  } catch (er) {
    setUser((prevUser) => {
      return { ...prevUser, isLoading: false };
    });
    return er.message;
  }
};

export default userRegister;
