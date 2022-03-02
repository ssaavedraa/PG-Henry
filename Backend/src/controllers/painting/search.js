const { Op, Artist } = require("../../db");
const getPaintings = require("./utils/getPaintings");

const search = async (req, res) => {
  const {
    searchTerm,
    minPrice,
    maxPrice,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    artist,
    technique,
    orientation,
    isAvailable,
    orderBy,
    order,
  } = req.query;
  //we start with an empty condition and we compose it depending on each query
  const condition = { where: { isAvailable: true } };
  //the techniques filter requires its own condition since it's in another table
  const techniqueCondition = { where: {} };

  try {
    if (searchTerm) {
      //we start by searching the artists that match the search term
      let artistIds = await Artist.findAll({
        where: { name: { [Op.iLike]: `%${searchTerm}%` } },
        attributes: ["id"],
      });
      artistIds = artistIds.map(({ id }) => id);

      //and we get all the paintings that get a match in the title or in the artist name
      condition.where = {
        ...condition.where,
        [Op.or]: [
          {
            title: {
              [Op.iLike]: `%${searchTerm}%`,
            },
          },
          {
            artistId: {
              [Op.in]: artistIds,
            },
          },
        ],
      };
    }

    if (minPrice && maxPrice) {
      condition.where.price = { [Op.between]: [minPrice, maxPrice] };
    } else {
      if (minPrice) {
        condition.where.price = { [Op.gte]: minPrice };
      }
      if (maxPrice) {
        condition.where.price = { [Op.lte]: maxPrice };
      }
    }

    if (minWidth && maxWidth) {
      condition.where.width = { [Op.between]: [minWidth, maxWidth] };
    } else {
      if (minWidth) {
        condition.where.width = { [Op.gte]: minWidth };
      }
      if (maxWidth) {
        condition.where.width = { [Op.lte]: maxWidth };
      }
    }

    if (minHeight && maxHeight) {
      condition.where.height = { [Op.between]: [minHeight, maxHeight] };
    } else {
      if (minHeight) {
        condition.where.height = { [Op.gte]: minHeight };
      }
      if (maxHeight) {
        condition.where.height = { [Op.lte]: maxHeight };
      }
    }
    if (artist) {
      condition.where.artistId = {
        [Op.in]: artist.split(",").map((id) => parseInt(id)),
      };
    }
    if (isAvailable !== undefined) {
      condition.where.isAvailable = isAvailable;
    }
    if (orderBy) {
      const direction = order ? order.toUpperCase() : "ASC";
      condition.order = [[orderBy, direction]];
    }

    if (technique) {
      techniqueCondition.where.id = {
        [Op.in]: technique.split(",").map((id) => parseInt(id)),
      };
    }

    //at this point we have our conditions ready and we make a query
    let paintings = await getPaintings(condition, techniqueCondition);
    //finally we filter the orientation manually since it's a virtual field
    if (orientation) {
      paintings = paintings.filter(({ orientation: or }) => or === orientation);
    }
    res.json(paintings || []);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = search;
