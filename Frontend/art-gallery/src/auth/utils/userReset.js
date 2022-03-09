import axios from "axios";

const userReset = () => {
  localStorage.removeItem("jwtToken");
  delete axios.defaults.headers.common["Authorization"];
};
export default userReset;
