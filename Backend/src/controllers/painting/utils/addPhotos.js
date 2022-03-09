const { Photo } = require("../../../db");


const addPhotos = async (photosArr, selectedPainting) => {
    try {
        const photos = photosArr.map((p) => {
            return { url: p };
        });
        const newPhotos = await Photo.bulkCreate(photos);
        await selectedPainting.addPhotos(newPhotos);
    } catch (err) {
        console.log(err)
    }
};


module.exports = addPhotos;