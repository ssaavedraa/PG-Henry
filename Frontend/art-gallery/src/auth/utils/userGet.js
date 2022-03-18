import axios from "axios";

const userGet = async () => {
  const token = localStorage.getItem("jwtToken");
  if (!token) throw new Error("no token");
  axios.defaults.headers.common["Authorization"] =
    localStorage.getItem("jwtToken");
  const { data } = await axios.get("/user/get");
  return data;
};
export default userGet;
