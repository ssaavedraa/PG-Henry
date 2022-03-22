import axios from "axios";

const setCanceled = async (id) => {
  try {
    const { data } = await axios.put("/purchase/set/canceled/" + id);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default setCanceled;
