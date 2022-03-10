const { User } = require("../../db");

const getAll = async (req, res) => {
  const { order, orderBy } = req.query;
  try {
    const users = await User.findAll({
      attributes: ["id", "firstName", "lastName", "email", "isBanned", "role"],
      order: [[orderBy || "id", order || "ASC"]],
    });
    res.json(users);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
module.exports = getAll;
