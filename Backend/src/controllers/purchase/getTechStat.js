const { Purchase, Painting, Technique, conn } = require("../../db");

const getTotalStat = async (req, res) => {
  const purchases = await Purchase.findAll({
    // attributes: ["id"],
    include: [
      {
        model: Painting,
        attributes: ["id", "price"],
        through: {
          attributes: [],
        },
        include: [
          {
            model: Technique,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        ],
      },
    ],
  });
  const techniques = await conn.query(
    `SELECT
	"name"
FROM
	techniques
GROUP BY
	"name";`,
    { type: conn.QueryTypes.SELECT }
  );
  const fixedTechniques = techniques.reduce((p, c) => {
    p[c.name.toLowerCase()] = { total: 0, count: 0 };
    return p;
  }, {});

  purchases.forEach((purchase) => {
    purchase.paintings.forEach((painting) => {
      const tech = painting.techniques[0].name.toLowerCase();
      fixedTechniques[tech].count += 1;
      fixedTechniques[tech].total += painting.price;
    });
  });
  res.json(fixedTechniques);
};

module.exports = getTotalStat;
