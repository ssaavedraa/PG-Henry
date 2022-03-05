const techniques = require("./data/techniques.json");
const artists = require("./data/artists.json");
const paintings = require("./data/paintings.json");
const reviews = require("./data/reviews.json");
const users = require("./data/users.json");
const purchases = require("./data/purchases.json");
const { Artist, Technique, Review, User, Purchase } = require("../src/db");
const createPainting = require("../src/controllers/painting/utils/createPainting");

const loadMockData = async () => {
	await Technique.bulkCreate(techniques);
	await Artist.bulkCreate(artists);
	await User.bulkCreate(users);
	for (let p of paintings) {
		await createPainting(p);
	}

	for (let i = 0; i < purchases.length; i++) {
		const createdPurchase = await Purchase.create(purchases[i]);
		await createdPurchase.addPaintings(purchases[i].paintingId);
	}
	/* for (let i = 0; i < reviews.length; i++) {
		const createdReview = await Review.create(reviews[i]);
		await createdReview.addUser(reviews[i].userId);
	} */
	await Review.bulkCreate(reviews);
};

module.exports = loadMockData;
