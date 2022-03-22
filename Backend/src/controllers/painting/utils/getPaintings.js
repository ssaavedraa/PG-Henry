const { Painting, Artist, Technique, Photo, Review } = require("../../../db");

const getPaintings = async (condition, techniqueCondition) => {
	let paintings = await Painting.findAll({
		...condition,
		attributes: [
			"id",
			"title",
			"description",
			"orientation",
			"height",
			"width",
			"price",
			"isAvailable",
		],
		include: [
			{
				...techniqueCondition,
				model: Technique,
				through: {
					attributes: [],
				},
				attributes: ["id", "name", "description"],
			},
			{
				model: Artist,
				attributes: ["id", "name", "biography", "photo", "email", "score"],
			},
			{
				model: Photo,
				attributes: ["url"],
			},
			{
				model: Review,
			},
		],
	});
	paintings = paintings.map((p) => {
		p = p.toJSON();
		if (p.reviews.length) {
			p.isReviewed = true;
		} else {
			p.isReviewed = false;
		}

		return p;
	});

	return paintings;
};

module.exports = getPaintings;
