const techniques = require("./data/techniques.json");
const artists = require("./data/artists.json");
const paintings = require("./data/paintings.json");
const { Artist, Technique } = require("../src/db");
const createPainting = require("../src/controllers/painting/utils/createPainting");

const loadMockData = async () => {
  await Technique.bulkCreate(techniques);
  await Artist.bulkCreate(artists);
  for (let p of paintings) {
    await createPainting(p);
  }
};

module.exports = loadMockData;
