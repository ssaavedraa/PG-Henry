const { Purchase, ContactInfo, Painting, Photo, Op } = require("../../db");

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
    const purchases = await Purchase.findAll({
      ...condition,
      include: [
        ContactInfo,
        {
          model: Painting,
          through: {
            attributes: [],
          },
          include: [
            {
              model: Photo,
              attributes: ["url"],
              separate: true,
              order: [["id", "ASC"]],
              limit: 1,
            },
          ],
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
