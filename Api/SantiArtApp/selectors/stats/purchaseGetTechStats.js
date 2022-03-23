import axios from "axios";

const purchaseGetTechStats = async () => {
  try {
    const { data } = await axios.get("/purchase/get/techstat");
    return { purchaseGetTechStats: data };
  } catch (err) {
    throw new Error(err.message);
  }
};

export default purchaseGetTechStats;
