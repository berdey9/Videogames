/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import styles from "../Cards/cards.module.css";

const Cards = ({ info }) => {
  return (
    <div className={styles.cont}>
      {info.map((vg) => (
        <Card
          key={vg.id}
          id={vg.id}
          name={vg.name}
          image={vg.image}
          genre={vg.genre}
        />
      ))}
    </div>
  );
};

export default Cards;
