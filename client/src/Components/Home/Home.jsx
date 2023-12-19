/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { getVideogames, page, vgOrders } from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);
  useEffect(() => {
    dispatch(getVideogames());
  }, []);
  const allPages = useSelector((state) => state.currentPage);
  const pagination = (event) => {
    dispatch(page(event.target.name));
  };
  const handleOrders = (event) => {
    dispatch(vgOrders(event.target.name));
  };
  return (
    <div>
      <div>
        <br />
        <div>
          <label htmlFor="">Filtros/Ordenamientos: </label>
          <br />
          <label htmlFor="">Alfabéticamente: </label>
          <button onClick={handleOrders} name="AZ">
            A-Z
          </button>
          <button onClick={handleOrders} name="ZA">
            Z-A
          </button>
          <br />
        </div>
        <label htmlFor="">Pagina:{allPages}</label>
        <br />
        <button name="prev" onClick={pagination}>
          ◀️
        </button>
        <button name="next" onClick={pagination}>
          ▶️
        </button>
        <button>Limpiar resultados</button>
      </div>
      {<Cards info={allVideogames}></Cards>}
    </div>
  );
};

export default Home;
