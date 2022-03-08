const { User, Painting } = require("../../db");
const remove = async (req, res) => {
	const { userId, paintingId } = req.body;
	try {
		const user = await User.findByPk(userId);
		if (!user) {
			return res.status(404).send("User not found");
		}
		const painting = await Painting.findByPk(paintingId);
		if (!painting) {
			return res.status(404).send("Picture not found");
		}
		const removed = await user.removePainting(paintingId);
		console.log(removed);
		if (!removed)
			return res
				.status(404)
				.send(
					`Favorites for user ${userId} does not include painting ${paintingId}`
				);
		res.send("Painting removed from favorites");
	} catch (e) {
		res.status(400).send(e);
	}
};

module.exports = remove;
