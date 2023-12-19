const { getAllGenresDb } = require("../controllers/genreControllers");

const getGenreHandler = async (req, res) => {
  try {
    const response = await getAllGenresDb();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
module.exports = getGenreHandler;
