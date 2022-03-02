const getPaintings = require("./utils/getPaintings");

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const painting = await getPaintings({ where: { id } });
    res.json(painting ? painting[0] : {});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = getById;
