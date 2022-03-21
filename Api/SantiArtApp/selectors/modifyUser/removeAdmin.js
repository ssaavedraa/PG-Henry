import axios from "axios";

const removeAdmin = async (id) => {
  try {
    const { data } = await axios.put("/user/removeadmin/" + id);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default removeAdmin;
