import axios from "axios";

const purchaseGetTotalStats = async () => {
  try {
    const { data } = await axios.get("/purchase/get/totalstat");
    return { purchaseGetTotalStats: data };
  } catch (err) {
    throw new Error(err.message);
  }
};

export default purchaseGetTotalStats;
