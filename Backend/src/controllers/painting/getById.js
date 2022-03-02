const { Painting, Artist, Technique } = require("../../db");

const getById = async (req, res) => {
  const { id } = req.params;
  const paintings = await Painting.findOne({
    where: { isAvailable: true, id },
    attributes: [
      "id",
      "title",
      "description",
      "orientation",
      "height",
      "width",
      "price",
    ],
    include: [
      {
        model: Technique,
        through: {
          attributes: [],
        },
        attributes: ["id", "name", "description"],
      },
      {
        model: Artist,
        attributes: ["id", "name", "biography", "photo", "email", "score"],
      },
    ],
  });
  res.json(paintings || {});
};

module.exports = getById;
