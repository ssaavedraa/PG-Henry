const { Painting } = require("../../db");

const getStats = async (req, res) => {
  const paintings = await Painting.findAll({ attributes: ["isAvailable"] });
  const avilableCount = paintings.reduce(
    (p, c) => (c.isAvailable ? p + 1 : p),
    0
  );
  res.json({
    available: avilableCount,
    notAvailable: paintings.length - avilableCount,
  });
};

module.exports = getStats;
