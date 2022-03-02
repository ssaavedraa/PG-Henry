const { Artist } = require("../../../db");



const createArtist = async (data) => {
  const {
    name,
    biography,
    photo,
    email,
  } = data;
  const newArtist = await Artist.create({
    name,
    biography,
    photo,
    email,
  });

  return newArtist;
};

module.exports = createArtist;