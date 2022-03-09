const { conn } = require("../../db");

const getSuggestions = async (req, res) => {
  const { searchBy } = req.params;
  const paintingsQuery = await conn.query(
    `SELECT "id", "title" as "name", similarity("title", '${searchBy}') 
    FROM "paintings"
    WHERE similarity("title", '${searchBy}') > 0
    ORDER BY similarity
    DESC LIMIT 5;`,
    { type: conn.QueryTypes.SELECT }
  );
  const artistsQuery = await conn.query(
    `SELECT "id", "name", similarity("name", '${searchBy}') 
    FROM "artists"
    WHERE similarity("name", '${searchBy}') > 0
    ORDER BY similarity
    DESC LIMIT 5;`,
    { type: conn.QueryTypes.SELECT }
  );
  const similarArtists = artistsQuery.map((a) => {
    return { ...a, type: "artist" };
  });
  const similarPaintings = paintingsQuery.map((a) => {
    return { ...a, type: "painting" };
  });
  const suggestions = [...similarPaintings, ...similarArtists].sort(
    ({ similarity: s1 }, { similarity: s2 }) => s2 - s1
  );
  res.json(suggestions.slice(0, 5));
};

module.exports = getSuggestions;
