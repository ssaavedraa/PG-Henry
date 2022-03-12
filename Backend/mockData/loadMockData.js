const techniques = require("./data/techniques.json");
const artists = require("./data/artists.json");
const paintings = require("./data/paintings.json");
const reviews = require("./data/reviews.json");
const users = require("./data/users.json");
const purchases = require("./data/purchases.json");
const { Artist, Technique, Review, User, Purchase } = require("../src/db");

const createPainting = require("../src/controllers/painting/utils/createPainting");
const {
	DEFAULT_USER_EMAIL,
	DEFAULT_USER_PASSWORD,
	DEFAULT_ADMIN_EMAIL,
	DEFAULT_ADMIN_PASSWORD,
} = process.env;

const loadMockData = async () => {
	console.log('loading mock data')

	await Technique.bulkCreate(techniques);
	await Artist.bulkCreate(artists);
	await User.bulkCreate(users);
	await User.create({
		firstName: "user",
		lastName: "default",
		email: DEFAULT_USER_EMAIL,
		password: DEFAULT_USER_PASSWORD,
		role: "user",
	});
	await User.create({
		firstName: "admin",
		lastName: "default",
		email: DEFAULT_ADMIN_EMAIL,
		password: DEFAULT_ADMIN_PASSWORD,
		role: "admin",
	});
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
