const { Review } = require("../../db");

const remove = async (req, res) => {
	const deleteId = req.params.id;
	const userId = req.body.userId;
	const review = await Review.findOne({ where: { userId: userId } });
	if (!review) return res.status(400).send("You can only delete your reviews");

	try {
		await Review.destroy({
			where: { id: deleteId },
		});
		res.send("Review Deleted");
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = remove;
