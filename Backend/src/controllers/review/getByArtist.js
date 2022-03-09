const { Review, Painting, Photo, User } = require("../../db");

const getByArtist = async (req, res) => {
	const paramId = req.params.id;

	try {
		const allReviews = await Review.findAll({
			where: { artistId: paramId },
			attributes: ["title", "body", "score", "id"],
			include: [
				{
					model: Painting,
					attributes: ["title", "price"],
					include: { model: Photo, attributes: ["url"] },
				},
			],
		});

		if (allReviews.length === 0) {
			return res.json([]);
		}
		const fixedReviews = allReviews.map((r) => {
			const {
				painting: { photos, title: paintingTitle, price: paintingPrice },
				...review
			} = r.toJSON();
			const paintingPhoto = photos ? photos[0].url : "";
			return { ...review, paintingTitle, paintingPhoto, paintingPrice };
		});
		res.json(fixedReviews);
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = getByArtist;
