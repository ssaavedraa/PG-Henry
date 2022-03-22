const {
	Purchase,
	ContactInfo,
	Painting,
	Photo,
	Op,
	Review,
} = require("../../db");

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
		let purchases = await Purchase.findAll({
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
						{ model: Review },
					],
				},
			],
			order: [["id", "ASC"]],
		});
		purchases = purchases.map((purchase) => {
			purchase = purchase.toJSON();

			purchase.paintings.map((p) => {
				if (p.reviews.length) {
					p.isReviewed = true;
				} else {
					p.isReviewed = false;
				}
				return p;
			});
			return purchase;
		});
		console.log(purchases.length);
		res.json(purchases || []);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

module.exports = getAll;
