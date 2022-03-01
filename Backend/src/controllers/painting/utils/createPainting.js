const { Painting, Photo, Artist, Technique } = require("../../../db");

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
  const photosUrl = photos.map((p) => {
    return { url: p };
  });
  const newPhotos = await Photo.bulkCreate(photosUrl);
  await newPainting.addPhotos(newPhotos);
  const artist = await Artist.findOne({ where: { id: artistId } });
  if (!artist) {
    throw new Error("Couldn't find artist with id: " + artistId);
  }
  await artist.addPainting(newPainting);
  await newPainting.addTechniques(techniqueIds);

  return newPainting;
};

module.exports = createPainting;
