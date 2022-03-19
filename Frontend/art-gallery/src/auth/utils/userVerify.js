import axios from "axios";

const userVerify = async (token) => {
  const config = { headers: { Authorization: "Bearer " + token } };
  const { data } = await axios.put("/user/verifyMail/", null, config);
  return data;
};
export default userVerify;
