const getPaintings = require("./utils/getPaintings");

const getAll = async (req, res) => {
  try {
    const paintings = await getPaintings({ isAvailable: true });
    res.json(paintings || []);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = getAll;
