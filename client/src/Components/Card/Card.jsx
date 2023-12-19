/* eslint-disable react/prop-types */
import React from "react";
import styles from "../Card/card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, genre }) => {
  return (
    <div className={styles.cont}>
      <div>
        <h4>ID: {id}</h4>
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
      </div>
      <div className={styles.contImg}>
        <img src={image} alt={name} />
      </div>
      <div>
        <label htmlFor="">Géneros: </label>
        <span>{genre.join(", ")}</span>
      </div>
    </div>
  );
};

export default Card;
