import styles from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.contImg}>
        <img
          src="https://media.gcflearnfree.org/content/5ccc48c7e5c6c4116cbd9df7_05_03_2019/consolasjuegos-01_xl.png"
          alt="Logo"
        />
      </div>
      <div className={styles.contLinks}>
        <Link to="/Home" className={styles.navLink}>
          Home
        </Link>
        <Link to="/Form" className={styles.navLink}>
          Form
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
