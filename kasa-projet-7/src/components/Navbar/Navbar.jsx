import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <Link className={styles.home} to="/">
        Accueil
      </Link>
      <Link className={styles.about} to="/about">
        A Propos
      </Link>
    </nav>
  );
}
export default Navbar;
