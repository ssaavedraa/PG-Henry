const { User, Painting } = require("../../db");
const add = async (req, res) => {
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
		const added = await user.addPainting(paintingId);
		console.log(added);
		if (!added)
			return res.status(400).send(`Painting ${paintingId} already in favorites`);
		res.send("Painting added to favorites");
	} catch (e) {
		console.log(e);
		res.status(400).send(e);
	}
};

module.exports = add;
