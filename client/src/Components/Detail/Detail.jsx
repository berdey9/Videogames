/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../Redux/Actions/actions";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector((state) => state.vgDetail);
  useEffect(() => {
    dispatch(getDetail(id));
    return () => {};
  }, []);
  return (
    <div>
      <div>
        <h1>Detalle</h1>
      </div>
      <div>
        <img src={detail.image} alt={detail.name} />
      </div>
      <div>
        <h2>{detail.name}</h2>
      </div>
      <div>
        <label htmlFor="">Género:{detail.genre?.join(", ")} </label>
        <br />
        <label htmlFor="">Fecha de lanzamiento: {detail.reldate}</label>
        <br />
        <label htmlFor="">
          Descripción:
          {detail.description ? detail.description : "Sin descripción"}
        </label>
        <br />
        <label htmlFor="">Rating: ⭐{detail.rating}</label>
        <br />
        <label htmlFor="">Plataformas: {detail.platforms?.join(", ")}</label>
        <br />
      </div>
    </div>
  );
};

export default Detail;
