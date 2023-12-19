/* eslint-disable no-unused-vars */
import axios from "axios";
import {
  GET_VIDEOGAMES,
  PAGE,
  ORDERS,
  GET_DETAIL,
  CLEAR_DETAIL,
  GET_GENRES,
  GET_PLATFORMS,
  SEARCH_VG,
} from "./action-types";
export const postVideogame = (state) => {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/videogames/", state);
      alert("El videojuego fue creado con éxito");
    } catch (error) {
      alert(error.response.data);
    }
  };
};
export const getVideogames = () => {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/videogames/");
      dispatch({
        type: GET_VIDEOGAMES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export function page(order) {
  return function (dispatch) {
    dispatch({
      type: PAGE,
      payload: order,
    });
  };
}
export function vgOrders(order) {
  return function (dispatch) {
    dispatch({
      type: ORDERS,
      payload: order,
    });
  };
}
export function getDetail(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/videogames/${id}`
      );
      const vgData = response.data[0];
      return dispatch({
        type: GET_DETAIL,
        payload: vgData,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function clearDetail(id) {
  return async function (dispatch) {
    try {
      dispatch({ type: CLEAR_DETAIL });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getGenres() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/genres/");
      dispatch({
        type: GET_GENRES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getPlatforms() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/platforms/");
      dispatch({
        type: GET_PLATFORMS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function searchVg(vg) {
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/videogames?name=${vg}`
      );
      response
        ? response
        : alert("No existe el videojuego con el nombre solicitado");
      dispatch({
        type: SEARCH_VG,
        payload: response.data,
      });
    } catch (error) {
      alert(error.response.data);
    }
  };
}
