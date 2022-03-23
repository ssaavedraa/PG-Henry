import axios from "axios";

const paintingGetStats = async () => {
  try {
    const { data } = await axios.get("/painting/getstats");
    return { paintingGetStats: data };
  } catch (err) {
    throw new Error(err.message);
  }
};

export default paintingGetStats;
