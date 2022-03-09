const loadMockData = require("./mockData/loadMockData.js");
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { LOAD_MOCK_DATA } = process.env;
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
    server.listen(3001, () => {
      console.log("%s listening at 3001"); // eslint-disable-line no-console
    });
  })
  .catch((err) => {
    console.error(err);
  });
