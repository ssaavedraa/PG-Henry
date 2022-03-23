import axios from "axios";

const purchaseGetUserStats = async () => {
  try {
    const { data } = await axios.get("/purchase/get/userstat");
    return { purchaseGetUserStats: data };
  } catch (err) {
    throw new Error(err.message);
  }
};

export default purchaseGetUserStats;
