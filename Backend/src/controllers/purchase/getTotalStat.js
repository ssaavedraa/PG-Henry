const { conn } = require("../../db");

const getTotalStat = async (req, res) => {
  const purchases = await conn.query(
    `SELECT 
        "state", COUNT("state")
    FROM 
        purchases
    GROUP BY
        "state";`,
    { type: conn.QueryTypes.SELECT }
  );
  const fixedPurchases = purchases.reduce(
    (p, c) => {
      p[c.state] = parseInt(c.count);
      return p;
    },
    { processing: 0, pending: 0, dispatched: 0, canceled: 0, completed: 0 }
  );
  res.json(fixedPurchases);
};

module.exports = getTotalStat;
