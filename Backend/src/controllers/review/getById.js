const { Review, Painting, Artist } = require("../../db");

const getById = async (req, res) => {
	const bodyId = req.params.id;
	console.log(bodyId);
	try {
		const review = await Review.findOne({
			where: { id: bodyId },
			include: [{ model: Painting }, { model: Artist }],
		});
		console.log(review);
		res.json(review);
	} catch (error) {
		res.status(400).send(error);
	}
};

module.exports = getById;
