const { Review } = require("../../db");

const getByArtist = async (req, res) => {
	const paramId = req.params.id;
	try {
		const allReviews = await Review.findAll({
			where: { artistId: paramId },
		});
		res.json(allReviews);
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = getByArtist;
