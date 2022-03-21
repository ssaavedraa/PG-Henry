import axios from "axios";

const giveAdmin = async (id) => {
  try {
    const { data } = await axios.put("/user/giveadmin/" + id);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default giveAdmin;
