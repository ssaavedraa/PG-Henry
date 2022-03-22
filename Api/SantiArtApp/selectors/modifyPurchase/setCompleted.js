import axios from "axios";

const setCompleted = async (id) => {
  try {
    const { data } = await axios.put("/purchase/set/completed/" + id);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default setCompleted;
