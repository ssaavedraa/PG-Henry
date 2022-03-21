import axios from "axios";

const unbanUser = async (id) => {
  try {
    const { data } = await axios.put("/user/unban/" + id);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default unbanUser;
