const { Review, Purchase, Painting, Artist } = require("../../db");
const updateScore = require("./utils/updateScore.js");

const add = async (req, res) => {
	const { title, body, score, paintingId } = req.body;
	const userId = req.user.id;
	const checkReview = await Review.findOne({ where: { userId, paintingId } });
	if (checkReview)
		return res.status(400).send("You reviewed this painting already");

	const painting = await Painting.findOne({
		where: { id: paintingId },
		attributes: ["artistId"],
		include: {
			model: Purchase,
			where: { userId, state: "completed" },
		},
	});
	if (!painting) {
		return res
			.status(406)
			.send("Can't post review unless you purchase the painting");
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

		updateScore(artistId);

		res.json(addedReview);
	} catch (error) {
		res.status(400).send(error);
	}
};

module.exports = add;
