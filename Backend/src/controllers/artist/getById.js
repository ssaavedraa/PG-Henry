const { Artist, Review, Painting } = require("../../db");

const getById = async (req, res) => {
  const { id } = req.params;
  const artist = await Artist.findOne({
    where: { id },
    attributes: ["id", "name", "biography", "photo", "email", "location"],
  });
  res.json(artist || {});
};

module.exports = getById;
