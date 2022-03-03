const { Artist } = require("../../db");

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, biography, photo, email } = req.body;
    const update = await Artist.update(
      { name,
        biography,
        photo,
        email,
      }, { where: { id }});

    res.json(update);

  } catch (err) {
      res.send(err)
  }
};

module.exports = update;