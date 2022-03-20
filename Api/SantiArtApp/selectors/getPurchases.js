import axios from "axios";

const getPurchases = async (state) => {
  try {
    console.log(state);
    const { data } = await axios.get("/purchase/get/all", {
      params: { state: state.toLowerCase() },
    });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default getPurchases;
