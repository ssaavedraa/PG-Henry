const { Review } = require("../../db");

const remove = async (req, res) => {
	const deleteId = req.params.id;
	const userId = req.body.userId;
	const review = Review.findOne({ where: { userId } });
	if (!review) return res.json("You can only delete your reviews");

	try {
		await Review.destroy({
			where: { id: deleteId },
		});
		res.json("Review Deleted");
	} catch (error) {
		res.status(404).send(error);
	}
};

module.exports = remove;
