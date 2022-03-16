const { Painting } = require("../../db");

const setAvailable = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPainting = await Painting.update(
      { isAvailable: true },
      { where: { id } }
    );
    res.json(updatedPainting[0] === 1 ? "Success" : "Painting doesn't exist");
  } catch (err) {
    res.status(400).send("Error");
  }
};

module.exports = setAvailable;
