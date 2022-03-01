const { Painting } = require("../../db");

const getAll = (req, res) => {
  console.log(Painting);
  res.send("aca te estoy mandando todo");
};

module.exports = getAll;
