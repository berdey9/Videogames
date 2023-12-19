const { Router } = require("express");
const videgamesRouter = require("./videogamesRouter");
const genreRouter = require("./genreRouter");
const platformsRouter = require("../routes/platformsRouter");
const mainRouter = Router();
mainRouter.use("/videogames", videgamesRouter);
mainRouter.use("/genres", genreRouter);
mainRouter.use("/platforms", platformsRouter);
module.exports = mainRouter;
