const { Review, Painting, Artist } = require("../../db");

const getById = async (req, res) => {
	const paramId = req.params.id;
	try {
		const review = await Review.findOne({
			where: { id: paramId },
			include: [{ model: Painting }, { model: Artist }],
		});
		res.json(review);
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = getById;
