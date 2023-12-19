/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  getVideogames,
  postVideogame,
  getGenres,
  getPlatforms,
} from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);
  const allPlatforms = useSelector((state) => state.allPlatforms);
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, []);
  const [state, setState] = useState({
    name: "",
    description: "",
    image: "",
    reldate: "",
    rating: "",
    platforms: [],
    genre: [],
  });
  const [errors, setErrors] = useState({
    name: "Requerido",
    description: "",
    image: "URL requerida",
    reldate: "",
    rating: "",
    platforms: "",
    genre: "",
  });
  const validate = (state, name) => {
    const regexImage = /\.(jpg|jpeg|png|gif)$/;
    const regexUrl =
      /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/;
    if (name === "name") {
      if (state.name === "") {
        setErrors({ ...errors, name: "el nombre es requerido" });
      } else {
        setErrors({ ...errors, name: "" });
      }
    }
    if (name === "image") {
      if (!regexImage.test(state.image) || !regexUrl.test(state.image)) {
        setErrors({ ...errors, image: "URL de imagen inválido" });
      } else setErrors({ ...errors, image: "" });
    }

    if (name === "rating") {
      if (isNaN(parseInt(state.rating))) {
        setErrors({ ...errors, rating: "Rating debe ser número" });
      } else {
        setErrors({ ...errors, rating: "" });
      }
    }
  };
  const submitDisabled = () => {
    let disabledAux = true;
    for (let error in errors) {
      if (errors[error] === "") disabledAux = false;
      else {
        disabledAux = true;
        break;
      }
    }
    return disabledAux;
  };
  const handleChange = (event) => {
    if (event.target.name === "genre") {
      setState({
        ...state,
        genre: [...state.genre, event.target.value],
      });
    } else if (event.target.name === "platforms") {
      setState({
        ...state,
        platforms: [...state.platforms, event.target.value],
      });
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    }
    validate(
      {
        ...state,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postVideogame(state)).then(() => {
      dispatch(getVideogames());
    });
  };
  return (
    <div>
      {console.log(state)}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre: </label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Nombre"
        />
        <span>{errors.name}</span>
        <br />
        <label htmlFor="">Descripción: </label>
        <input
          onChange={handleChange}
          type="text"
          name="description"
          placeholder="Descripción"
        />
        <span></span>
        <br />
        <label htmlFor="">Imagen:</label>
        <input
          onChange={handleChange}
          placeholder="URL:http://"
          type="text"
          name="image"
        />
        <span>{errors.image}</span>
        <br />
        <label htmlFor="">Fecha de lanzamiento: </label>
        <input onChange={handleChange} type="date" name="reldate" />
        <span></span>
        <br />
        <label htmlFor="">Rating: </label>
        <input
          onChange={handleChange}
          type="text"
          name="rating"
          placeholder="Rating"
        />
        <span>{errors.rating}</span>
        <br />
        <div>
          <label>Géneros</label>
          <select onChange={handleChange} name="genre">
            {allGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <label htmlFor="">Plataformas:</label>
          <select onChange={handleChange} name="platforms">
            {allPlatforms.map((plat) => (
              <option key={plat} value={plat}>
                {plat}
              </option>
            ))}
          </select>
        </div>
        <div>
          Crear Videojuego
          <input disabled={submitDisabled()} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
