const { Router } = require("express");
const getGenreHandler = require("../handlers/genreHandlers");
const genreRouter = Router();
genreRouter.get("/", getGenreHandler);
module.exports = genreRouter;
