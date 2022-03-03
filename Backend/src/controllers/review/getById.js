const { Review, Painting, Artist, Photo } = require("../../db");

const getById = async (req, res) => {
	const paramId = req.params.id;
	try {
		const review = await Review.findOne({
			where: { id: paramId },
			attributes: ["title", "body", "score"],
			include: [
				{
					model: Painting,
					attributes: ["height", "width"],
					include: [{ model: Photo, attributes: ["url", "altText"] }],
				},
				{ model: Artist, attributes: ["name", "score"] },
			],
			raw: true,
		});
		if (!review)
			return res.status(404).send(`No reviews found with id:${paramId}`);
		res.json(review);
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = getById;
