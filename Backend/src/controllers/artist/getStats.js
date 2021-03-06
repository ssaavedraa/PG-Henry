const { Artist, conn } = require("../../db");

const getAll = async (req, res) => {
  const { orderBy, order } = req.query;
  const rawArtists = await Artist.findAll({
    attributes: [["id", "artistId"], "name", "photo", "email" ],
    order: [["id", "ASC"]],
  });
  const paintings = await conn.query(
    `select "artistId", count("id") as paintings from "paintings"
  group by "artistId"
  order by "artistId";`,
    { type: conn.QueryTypes.SELECT }
  );
  const sales = await conn.query(
    `SELECT "paintings"."artistId", COUNT("purchaseId") AS sales
    FROM "painting_purchases" 
    INNER JOIN paintings ON ("painting_purchases"."paintingId"= "paintings"."id" )
    INNER JOIN purchases ON ("painting_purchases"."purchaseId"= "purchases"."id" )
    WHERE "state"='completed'
    GROUP BY "paintings"."artistId";`,
    { type: conn.QueryTypes.SELECT }
  );

  const reviews = await conn.query(
    `select "artistId", count("id")  as reviews, avg("score") as score
  from "reviews"   
  group by "artistId"
  order by "artistId";`,
    { type: conn.QueryTypes.SELECT }
  );

  const artists = rawArtists.map((a) => a.toJSON());
  const artistsStats = [...artists, ...paintings, ...sales, ...reviews].reduce(
    (prev, curr) => {
      const i = prev.findIndex((e) => e.artistId === curr.artistId);
      if (i === -1) return [...prev, curr];
      prev[i] = { ...prev[i], ...curr };
      return prev;
    },
    []
  );
  const fullArtistsStats = artistsStats.map((s) => {
    return { paintings: "0", sales: "0", reviews: "0", score: "0", ...s };
  });
  if (!fullArtistsStats[0].hasOwnProperty(orderBy))
    return res.json(fullArtistsStats);
  const orderedArtists = fullArtistsStats.sort((a1, a2) =>
    a1[orderBy] > a2[orderBy] ? 1 : -1
  );
  res.json(order === "DESC" ? orderedArtists.reverse() : orderedArtists);
};

module.exports = getAll;
