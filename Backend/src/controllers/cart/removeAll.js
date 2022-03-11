const { User, Cart } = require("../../db");

const removeAll = async (req, res) => {
	const userId = req.user.id;

	try {
		const user = await User.findByPk(userId);
		if (!user) {
			return res.status(404).send("User not found");
		}
		const removed = await Cart.destroy({ where: { userId } });

		res.json(removed);
	} catch (e) {
		console.log(e);
		res.status(400).send(e);
	}
};

module.exports = removeAll;