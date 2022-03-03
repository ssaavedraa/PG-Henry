const { Artist, Review, Painting } = require("../../db");

const getAll = async (req, res) => {
  const artists = await Artist.findAll({
    attributes: ["id", "name", "location", "photo"],
  });
  res.json(artists);
};

module.exports = getAll;
