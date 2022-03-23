const { conn } = require("../../db");

const getUserStat = async (req, res) => {
  const totalUsers = await conn.query(
    `SELECT
	COUNT(*)
FROM
	users;`,
    { type: conn.QueryTypes.SELECT }
  );
  const purchases = await conn.query(
    `SELECT
        COUNT(DISTINCT "userId")
    FROM
        purchases;`,
    { type: conn.QueryTypes.SELECT }
  );
  const totalUsersCount = parseInt(totalUsers[0].count);
  const totalPurchasesCount = parseInt(purchases[0].count);
  res.json({
    withPurchase: totalPurchasesCount,
    withoutPurchase: totalUsersCount - totalPurchasesCount,
  });
};

module.exports = getUserStat;
