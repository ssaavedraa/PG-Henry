const techniques = require("./data/techniques.json");
const artists = require("./data/artists.json");
const paintings = require("./data/paintings.json");
const reviews = require("./data/reviews.json");
const users = require("./data/users.json");
const purchases = require("./data/purchases.json");
const contactInfos = require("./data/contactInfo.json");
const {
  Artist,
  Technique,
  Review,
  User,
  Purchase,
  ContactInfo,
} = require("../src/db");

const createPainting = require("../src/controllers/painting/utils/createPainting");
const {
  DEFAULT_USER_EMAIL,
  DEFAULT_USER_PASSWORD,
  DEFAULT_ADMIN_EMAIL,
  DEFAULT_ADMIN_PASSWORD,
} = process.env;

const loadMockData = async () => {
  console.log("loading mock data");

  await Technique.bulkCreate(techniques);
  await Artist.bulkCreate(artists);
  await User.bulkCreate(users);
  await User.create({
    firstName: "defaul",
    lastName: "user",
    email: "default-user@santart.com",
    password: "user123!",
    role: "user",
    isVerified: true,
  });
  await User.create({
    firstName: "admin",
    lastName: "default",
    email: "admin@santart.com",
    password: "@dm1n2022!",
    role: "admin",
    isVerified: true,
  });
  for (let p of paintings) {
    await createPainting(p);
  }

  for (let i = 0; i < purchases.length; i++) {
    const createdPurchase = await Purchase.create(purchases[i]);
    await createdPurchase.addPaintings(purchases[i].paintingId);
    await createdPurchase.createContactInfo(contactInfos[i]);
  }
  /* for (let i = 0; i < reviews.length; i++) {
		const createdReview = await Review.create(reviews[i]);
		await createdReview.addUser(reviews[i].userId);
	} */
  await Review.bulkCreate(reviews);
};

module.exports = loadMockData;
