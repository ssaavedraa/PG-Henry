const { Painting, painting_technique } = require("../../db");
const updatePhotos = require("./utils/updatePhotos.js");

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      height,
      width,
      price /*photos, techniqueIds*/,
    } = req.body;

    //Updating photos

    const updatedPainting = await Painting.findOne({ where: { id } });
    //updatePhotos(photos, updatedPainting);

    //Updating techniques

    //await painting_technique.destroy({ where: { paintingId: id } });
    //await updatedPainting.addTechniques(techniqueIds);

    //Updating extra info

    const update = await Painting.update(
      { title, description, height, width, price },
      { where: { id } }
    );

    if (update == 1) {
      res.json("painting updated succesfully");
    } else {
      res.json("painting update failed");
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports = update;
