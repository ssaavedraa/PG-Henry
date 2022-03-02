const { Review, Purchase, Painting, Artist } = require("../../db");

const add = async (req, res) => {
	const { title, body, score, userId, paintingId } = req.body;
	const painting = await Painting.findOne({
		where: { id: paintingId },
		attributes: ["artistId"],
		include: {
			model: Purchase,
			where: { userId, state: "completed" },
		},
	});
	if (!painting) {
		return res.json("Can't post review unless you purchase the painting");
	}
	const artistId = painting.toJSON().artistId;
	try {
		const addedReview = await Review.create({
			title,
			body,
			score,
			paintingId,
			userId,
			artistId,
		});
		let reviewsScores = await Review.findAll({
			where: { artistId: artistId },
			attributes: ["score"],
			raw: true,
		});

		reviewsScores = reviewsScores.map((scoreInteger) => scoreInteger.score);

		let averageScore =
			reviewsScores.reduce((a, b) => a + b, 0) / reviewsScores.length;
		averageScore = averageScore.toFixed(1);
		const artistReviewed = await Artist.findByPk(artistId);

		await artistReviewed.update({ score: averageScore });

		res.json(addedReview);
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
};

module.exports = add;
