import axios from "axios";

const userSet = (token) => {
  localStorage.setItem("jwtToken", "Bearer " + token);
  axios.defaults.headers.common["Authorization"] =
    localStorage.getItem("jwtToken");
};
export default userSet;
