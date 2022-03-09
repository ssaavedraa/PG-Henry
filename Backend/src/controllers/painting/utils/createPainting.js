const { Painting, Photo, Artist } = require("../../../db");
const updatePhotos = require('./updatePhotos.js');


/*
data: {
    title, description, orientation, height, width, price, photos:[url], artistId, techniqueIds:[id]
}
*/

const createPainting = async (data) => {
  const {
    title,
    description,
    orientation,
    height,
    width,
    price,
    photos,
    artistId,
    techniqueIds,
  } = data;
  const newPainting = await Painting.create({
    title,
    description,
    orientation,
    height,
    width,
    price,
  });

  updatePhotos(photos, newPainting);

  const artist = await Artist.findOne({ where: { id: artistId } });
  if (!artist) {
    throw new Error("Couldn't find artist with id: " + artistId);
  }
  await artist.addPainting(newPainting);
  await newPainting.addTechniques(techniqueIds);

  return { ...newPainting.toJSON(), artistId };
};

module.exports = createPainting;
