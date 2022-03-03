const { Review, Painting, Photo } = require("../../db");

const getByArtist = async (req, res) => {
	const paramId = req.params.id;
	try {
		const allReviews = await Review.findAll({
			where: { artistId: paramId },
			attributes: ["title", "body", "score", "id"],
			include: [
				{
					model: Painting,
					attributes: ["title", "height", "width", "price"],
					include: { model: Photo, attributes: ["url", "altText"] },
				},
			],
		});
		if (!allReviews.length)
			return res.status(404).send(`No reviews found of artist with id:${paramId}`);
		res.json(allReviews);
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = getByArtist;
