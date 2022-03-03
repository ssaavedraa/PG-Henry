const { Artist, Review, Painting } = require("../../db");

const getById = async (req, res) => {
  const { id } = req.params;
  const artist = await Artist.findOne({
    where: { id },
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
  res.json(artist || {});
};

module.exports = getById;