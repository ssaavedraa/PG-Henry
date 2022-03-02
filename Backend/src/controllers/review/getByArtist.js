const { Review } = require("../../db");

const getByArtist = async (req, res) => {
	const bodyId = req.params.id;
	try {
		const allReviews = await Review.findAll({
			where: { artistId: bodyId },
		});
		res.json(allReviews);
	} catch (error) {
		res.status(400).send(error);
	}
};

module.exports = getByArtist;
