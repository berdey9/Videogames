const { Videogame, Genre } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;
const URL = `https://api.rawg.io/api/games?key=${API_KEY}&page=1`;
const createVg = async (
  name,
  description,
  image,
  reldate,
  rating,
  platforms,
  genre
) => {
  const newVideogame = await Videogame.create({
    name,
    description,
    image,
    reldate,
    rating,
    platforms,
  });
  genre.forEach(async (genre) => {
    let genresDb = await Genre.findAll({
      where: { name: genre },
    });
    await newVideogame.addGenre(genresDb);
  });
  return newVideogame;
};
const getVgDb = async () => {
  const videogamesDb = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
  const vgMap = videogamesDb.map((vg) => {
    return {
      id: vg.id,
      name: vg.name,
      description: vg.description,
      image: vg.image,
      reldate: vg.released,
      rating: vg.rating,
      platforms: vg.platforms,
      genre: vg.Genres.map((genre) => genre.name),
    };
  });
  return vgMap;
};
const getVgApi = async () => {
  const gamesArray = [];
  for (let i = 1; i <= 5; i++) {
    let gamesApi = await axios(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
    );
    gamesApi.data.results.map((game) => {
      gamesArray.push({
        id: game.id,
        name: game.name,
        image: game.background_image,
        reldate: game.released,
        rating: game.rating,
        platforms: game.platforms.map((platform) => platform.platform.name),
        genre: game.genres.map((genre) => genre.name),
      });
    });
  }
  return gamesArray;
};
const getVg = async (name) => {
  const videogamesApi = await getVgApi();
  const videogamesDb = await getVgDb();
  const allVideogames = [...videogamesDb, ...videogamesApi];
  if (name) {
    const vgFound = allVideogames
      .filter((game) => game.name.toLowerCase().includes(name.toLowerCase()))
      .slice(0, 15);
    if (vgFound.length === 0) {
      return `No se encontró ningún videojuego con el nombre ${name}`;
    }
    return vgFound;
  }
  return allVideogames;
};

module.exports = { createVg, getVg };
