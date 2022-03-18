const { Purchase, ContactInfo } = require("../../db");

const getAll = async (req, res) => {
  const {
    user: { id, role },
  } = req;
  const { state } = req.query;

  try {
    const condition = { where: {} };
    if (role === "user") condition.where = { ...condition.where, userId: id };
    if (state) condition.where = { ...condition.where, state };
    console.log(condition);
    const purchases = await Purchase.findAll({
      ...condition,
      include: ContactInfo,
    });
    res.json(purchases || []);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = getAll;
