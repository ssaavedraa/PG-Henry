const createArtist = require("./utils/createArtist.js");

const add = async (req, res) => {
  createArtist(req.body)
    .then((artist) => {
      res.status(201).json(artist);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};

module.exports = add;
