const createPainting = require("./utils/createPainting.js");

const add = async (req, res) => {
  createPainting(req.body)
    .then((painting) => {
      res.status(201).json(painting);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};

module.exports = add;
