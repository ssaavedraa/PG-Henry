import axios from "axios";

const banUser = async (id) => {
  try {
    const { data } = await axios.put("/user/ban/" + id);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default banUser;
