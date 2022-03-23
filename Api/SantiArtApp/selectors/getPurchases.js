import axios from "axios";

const prio = {
  processing: 0,
  pending: 1,
  dispatched: 2,
  completed: 3,
  canceled: 4,
};

const getPurchases = async (state) => {
  try {
    const { data } = await axios.get("/purchase/get/all", {
      params: { state: state.toLowerCase() },
    });
    const sortData = data.sort(
      ({ state: s1 }, { state: s2 }) => prio[s1] - prio[s2]
    );
    return sortData;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default getPurchases;
