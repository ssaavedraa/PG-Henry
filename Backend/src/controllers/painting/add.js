const { Painting, Photo, Artist } = require("../../db");

const add = async (req, res) => {
  const {
    title,
    description,
    orientation,
    height,
    width,
    price,
    photos,
    artistId,
  } = req.body;

  try {
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
    /*     const artist = await Artist.findOne({ where: { id: artistId } });
    if (!artist) {
      throw new Error("Couldn't find artist with id: " + artistId);
    }
    await artist.addPainting(newPainting); */
    res.status(201).json(newPainting);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: err.message });
  }
};

module.exports = add;
