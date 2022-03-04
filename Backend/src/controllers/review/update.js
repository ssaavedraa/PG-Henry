const { Review } = require("../../db");
const updateScore = require("./utils/updateScore.js");


const update = async (req, res) => {
	const updateId = req.params.id;
	const userId = req.body.userId;
	const review = await Review.findOne({
		where: { userId: userId, id: updateId },
		attributes: ["artistId"],
	});

	if (!review) return res.json("You can only edit your reviews");

	try {
		const { title, body, score } = req.body;
		await Review.update(
			{ title, body, score },
			{
				where: { id: updateId },
			}
		);

		const artistId = review.toJSON().artistId;
		updateScore(artistId);

		res.send("Review Updated");
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = update;
