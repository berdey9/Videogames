const { Genre } = require("../db");
const { API_KEY } = process.env;
const { getVgApi } = require("../controllers/vgControllers");
const axios = require("axios");
const URL = `https://api.rawg.io/api/genres?key=${API_KEY}`;
const getAllGenresDb = async () => {
  const genresDb = await Genre.findAll();
  if (!genresDb.length) {
    const apiGenres = (await axios(URL)).data.results;
    let genres = [];
    apiGenres.forEach((genre) => genres.push(genre.name));
    let genresArray = [...genres];
    genresArray.forEach((genre) => {
      Genre.findOrCreate({ where: { name: genre } });
    });
    return genresArray;
  }
  return genresDb.map((genre) => genre.name);
};
module.exports = { getAllGenresDb };
