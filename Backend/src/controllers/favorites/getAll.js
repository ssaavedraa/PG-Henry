const { User, Painting, Photo, Artist } = require("../../db");
const getAll = async (req, res) => {
	const userId = req.user.id;
	try {
		let user = await User.findOne({
			where: { id: userId },
			attributes: ["id", "firstName"],
			include: {
				model: Painting,
				attributes: ["id", "title", "height", "width", "price"],
				include: [{ model: Photo }, { model: Artist }],
			},
		});
		if (!user) return res.status(404).send("User not found");
		const favoritesArray = user.paintings.map((fav) => {
			fav = fav.toJSON();
			return {
				id: fav.id,
				title: fav.title,
				paintingPhoto: fav.photos[0].url,
				paintingWidth: fav.width,
				paintingHeight: fav.height,
				paintingprice: fav.price,
				artistName: fav.artist.name,
				artistPhoto: fav.artist.photo,
			};
		});
		if (!favoritesArray.length)
			return res.status(404).send("User does not have favorites");

		res.json(favoritesArray);
	} catch (e) {
		res.status(400).send(e);
	}
};

module.exports = getAll;
