const getPaintings = require("./utils/getPaintings");
const { Op, conn } = require("../../db");

const getRecommended = async (req, res) => {
  const { paintingId } = req.params;

  const recommended = await getPaintings({
    where: { id: { [Op.ne]: paintingId } },
    order: conn.random(),
    limit: 10,
  });
  const fixedRecommended = recommended.map((r) => {
    const { id, title, photos } = r.toJSON();
    const image = photos[0].url;
    return { id, title, image };
  });
  res.json(fixedRecommended);
};

module.exports = getRecommended;
