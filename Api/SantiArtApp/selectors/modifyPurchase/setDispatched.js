import axios from "axios";

const setDispatched = async (id) => {
  try {
    const { data } = await axios.put("/purchase/set/dispatched/" + id);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default setDispatched;
