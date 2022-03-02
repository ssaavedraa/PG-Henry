const { Painting, Artist, Technique } = require("../../../db");

const getPaintings = async (condition) => {
  const paintings = await Painting.findAll({
    where: condition,
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
  return paintings;
};

module.exports = getPaintings;
