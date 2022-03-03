const { Review } = require("../../db");

const edit = async (req, res) => {
	const updateId = req.params.id;
	const userId = req.body.userId;
	const review = Review.findOne({ where: { userId } });
	if (!review) return res.json("You can only edit your reviews");

	try {
		const { title, body, score } = req.body;
		await Review.update(
			{ title, body, score },
			{
				where: { id: updateId },
			}
		);
		res.send("Review Updated");
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = edit;
