const { Photo } = require("../../../db");
const addPhotos =  require("./addPhotos.js");

const updatePhotos = async (photosArr, selectedPainting) => {
  try {
    await Photo.destroy({ where: { paintingId: selectedPainting.id } });
    addPhotos(photosArr, selectedPainting);
  } catch (err) {
    console.log(err)
  }};
  
module.exports = updatePhotos;