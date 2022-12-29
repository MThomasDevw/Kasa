import styles from "./Collapse.module.css";
import { useState } from "react";
import vectordown from "../assets/vector-down.png";
import vectorup from "../assets/vector-up.png";

function Collapsible() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.buttonClose}>
      {!open ? (
        <div className={styles.dropDown} onClick={() => setOpen(true)}>
          <p>Respect</p>
          <img className={styles.vector} src={vectordown} alt=""></img>
        </div>
      ) : (
        <div className={styles.dropUp} onClick={() => setOpen(false)}>
          <p>Respect</p>
          <img className={styles.vector} src={vectorup} alt=""></img>
        </div>
      )}

      {open && (
        <div className={styles.buttonOpen}>
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
      )}
    </div>
  );
}
export default Collapsible;
