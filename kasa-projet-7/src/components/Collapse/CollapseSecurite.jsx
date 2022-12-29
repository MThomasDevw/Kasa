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
          <p>Sécurité</p>
          <img className={styles.vector} src={vectordown} alt=""></img>
        </div>
      ) : (
        <div className={styles.dropUp} onClick={() => setOpen(false)}>
          <p>Sécurité</p>
          <img className={styles.vector} src={vectorup} alt=""></img>
        </div>
      )}

      {open && (
        <div className={styles.buttonOpen}>
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      )}
    </div>
  );
}
export default Collapsible;
