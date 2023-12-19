const { Router } = require("express");
const { API_KEY } = process.env;
const axios = require("axios");
const platformsRouter = Router();
const URL = `https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`;
platformsRouter.get("/", async (req, res) => {
  const response = await axios(URL);
  const platformsApi = response.data.results.map((plat) => plat.name);
  res.send(platformsApi);
});
module.exports = platformsRouter;
