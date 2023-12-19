const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;
const {
  getAllGenresDb,
} = require("../server/src/controllers/genreControllers.js");
conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      getAllGenresDb();
      console.log(
        `Server listening on port ${PORT} & genres loaded successfully`
      );
    });
  })
  .catch((error) => console.error(error));
