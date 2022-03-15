const { Painting, Cart } = require("../../db");
const getAll = async (req, res) => {
	const userId = req.user.id;
	try {
		let carts = await Cart.findAll({
			where: { userId },
			include: {
				model: Painting,
				attributes: ["id"]
			}
		});
		if (!carts) return res.status(404).send("Empty cart");

		const cartArray = carts.map((cart) => {
			cart = cart.toJSON();
			return cart.painting.id
		});

		res.send(cartArray);
	} catch (e) {
		res.status(400).send(e);
	}
};

module.exports = getAll;
