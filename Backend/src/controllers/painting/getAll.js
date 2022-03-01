const { Painting, Artist, Technique } = require("../../db");

const getAll = async (req, res) => {
  const paintings = await Painting.findAll({
    where: { isAvailable: true },
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
  res.json(paintings);
};

module.exports = getAll;
