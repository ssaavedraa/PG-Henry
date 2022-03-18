const loadMockData = require("./mockData/loadMockData.js");
const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const LOAD_MOCK_DATA = process.env.LOAD_MOCK_DATA;
const port = process.env.PORT || 3001
// Syncing all the models at once.

conn
  .sync({ force: true })
  .then(() => {
    if (LOAD_MOCK_DATA) loadMockData();
  })
  .then(() => {
    conn.query("CREATE EXTENSION IF NOT EXISTS  pg_trgm;");
  })
  .then(() => {
    server.listen(port, () => {
      console.log(`%s listening at ${port}`); // eslint-disable-line no-console
    });
  })
  .catch((err) => {
    console.error(err);
  });

