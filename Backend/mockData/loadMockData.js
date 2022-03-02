const techniques = require("./data/techniques.json");
const artists = require("./data/artists.json");
const paintings = require("./data/paintings.json");
const reviews = require("./data/reviews.json");
const { Artist, Technique, Review } = require("../src/db");
const createPainting = require("../src/controllers/painting/utils/createPainting");

const loadMockData = async () => {
  await Technique.bulkCreate(techniques);
  await Artist.bulkCreate(artists);
  await Review.bulkCreate(reviews);
  for (let p of paintings) {
    await createPainting(p);
  }
};

module.exports = loadMockData;
