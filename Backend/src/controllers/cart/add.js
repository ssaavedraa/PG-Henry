const { User, Painting, Cart } = require("../../db");
const add = async (req, res) => {
	const paintingId = req.params.id;
	const userId = req.user.id;
	try {
		const user = await User.findByPk(userId);
		if (!user) {
			return res.status(404).send("User not found");
		}
		const painting = await Painting.findByPk(paintingId);
		if (!painting) {
			return res.status(404).send("Picture not found");
		}

		const added = await Cart.findOrCreate({ where: { paintingId, userId } });

		res.json(added);
	} catch (e) {
		console.log(e);
		res.status(400).send(e);
	}
};

module.exports = add;
