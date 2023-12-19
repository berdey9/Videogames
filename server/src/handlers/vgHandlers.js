const { getVg, createVg } = require("../controllers/vgControllers");
const getVgHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const response = await getVg(name);
    response.length
      ? res.status(200).json(response)
      : res
          .status(404)
          .send("No existe el videojuego con el nombre solicitado");
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const createVgHandler = async (req, res) => {
  try {
    const { name, description, image, reldate, rating, platforms, genre } =
      req.body;
    const response = await createVg(
      name,
      description,
      image,
      reldate,
      rating,
      platforms,
      genre
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
const getVgIdHandler = async (req, res) => {
  const { id } = req.params;
  const allVideogames = await getVg();
  try {
    if (id) {
      let resultId = allVideogames.filter((game) => game.id == id);
      resultId.length
        ? res.status(200).json(resultId)
        : res.status(404).send("No existe el videojuego solicitado");
    }
  } catch (error) {
    res.status(500).send("Ha ocurrido un error en el servidor");
  }
};
module.exports = { getVgHandler, getVgIdHandler, createVgHandler };
