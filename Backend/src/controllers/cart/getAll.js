const { Painting, Photo, Artist, Cart } = require("../../db");
const getAll = async (req, res) => {
	const userId = req.user.id;
	try {
		let carts = await Cart.findAll({
			where: { userId },
			include: {
				model: Painting,
				attributes: ["id", "title", "height", "width", "price"],
				include: [{ model: Photo }, { model: Artist }],
			},
		});
		if (!carts) return res.status(404).send("Cart not found");

		const cartArray = carts.map((cart) => {
			cart = cart.toJSON();

			return {
				id: cart.id,
				title: cart.painting.title,
				paintingId: cart.painting.id,
				paintingPhoto: cart.painting.photos[0].url,
				paintingWidth: cart.painting.width,
				paintingHeight: cart.painting.height,
				paintingprice: cart.painting.price,
				artistName: cart.painting.artist.name,
				artistPhoto: cart.painting.artist.photo,
			};
		});
		if (!cartArray.length)
			return res.status(404).send("User does not have favorites");

		res.json(cartArray);
	} catch (e) {
		res.status(400).send(e);
	}
};

module.exports = getAll;
