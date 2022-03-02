const { Artist, Review, Painting } = require("../../db");

const getAll = async (req, res) => {
  const artists = await Artist.findAll({
    attributes: [
      "id",
      "name",
      "biography",
      "photo",
      "email",
      "score",
    ],
    include: [
      {
        model: Review,
        attributes: ["id", "title", "body", "score"],
      },
      {
        model: Painting,
        attributes: ["id", "title", "description", "orientation", "height", "width", "price", "isAvailable"],
      },
    ],
  });
  res.json(artists);
};

module.exports = getAll;