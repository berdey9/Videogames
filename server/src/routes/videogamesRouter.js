const { Router } = require("express");
const {
  createVgHandler,
  getVgHandler,
  getVgIdHandler,
} = require("../handlers/vgHandlers");
const videogamesRouter = Router();
videogamesRouter.get("/", getVgHandler);
videogamesRouter.get("/:id", getVgIdHandler);
videogamesRouter.post("/", createVgHandler);
module.exports = videogamesRouter;
