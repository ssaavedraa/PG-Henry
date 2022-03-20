const { Purchase, ContactInfo, Painting, Op } = require("../../db");

const getAll = async (req, res) => {
  const {
    user: { id, role },
  } = req;
  const { state } = req.query;
  const stateList = state && state.split(",").map((s) => s.trim());
  try {
    const condition = { where: {} };
    if (role === "user") condition.where = { ...condition.where, userId: id };
    if (state)
      condition.where = { ...condition.where, state: { [Op.in]: stateList } };
    console.log(condition);
    const purchases = await Purchase.findAll({
      ...condition,
      include: [
        ContactInfo,
        {
          model: Painting,
          through: {
            attributes: [],
          },
          attributes: ["id", "title", "description", "price"],
        },
      ],
      order: [["id", "ASC"]],
    });
    res.json(purchases || []);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = getAll;
