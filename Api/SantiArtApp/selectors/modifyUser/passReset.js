import axios from "axios";

const passReset = async (id) => {
  try {
    const { data } = await axios.put("/user/passreset/" + id);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default passReset;
