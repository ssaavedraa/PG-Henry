const { Artist, Op } = require("../../db");

const getById = async (req, res) => {
  const { name } = req.query;
  const artist = await Artist.findAll({
    where: { name: { [Op.iLike]: `%${name || ""}%` } },
    attributes: ["id", "name", "location", "photo"],
  });
  res.json(artist || []);
};

module.exports = getById;
