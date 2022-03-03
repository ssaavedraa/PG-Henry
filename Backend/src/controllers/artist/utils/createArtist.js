const { Artist } = require("../../../db");

const createArtist = async (data) => {
  const { name, biography, photo, email, location } = data;
  const newArtist = await Artist.create({
    name,
    biography,
    photo,
    email,
    location,
  });

  return newArtist;
};

module.exports = createArtist;
