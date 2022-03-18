import axios from "axios";

const userRegister = async (user, setUser) => {
  setUser((prevUser) => {
    return { ...prevUser, isLoading: true };
  });
  try {
    const { data } = await axios.post("/user/register", {
      user,
      url: window.location.host,
    });
    if (data.status === "error") throw new Error(data.message);
    setUser((prevUser) => {
      return { ...prevUser, isLoading: false };
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
