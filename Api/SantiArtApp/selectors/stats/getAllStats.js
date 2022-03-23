import paintingGetStats from "./paintingGetStats";
import purchaseGetTechStats from "./purchaseGetTechStats";
import purchaseGetTotalStats from "./purchaseGetTotalStats";
import purchaseGetUserStats from "./purchaseGetUserStats";

const getAllStats = async () => {
  try {
    const statsPromises = [
      paintingGetStats(),
      purchaseGetTechStats(),
      purchaseGetTotalStats(),
      purchaseGetUserStats(),
    ];
    const allStats = await Promise.all(statsPromises);
    const combinedStats = allStats.reduce((r, c) => Object.assign(r, c), {});
    return combinedStats;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default getAllStats;
