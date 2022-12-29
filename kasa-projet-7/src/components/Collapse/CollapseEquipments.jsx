import styles from "./Collapse.module.css";
import { useState } from "react";
import vectordown from "../assets/vector-down.png";
import vectorup from "../assets/vector-up.png";


function Collapsible({ equipements }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.buttonClose}>
      {!open ? (
        <div className={styles.dropDown} onClick={() => setOpen(true)}>
          <p>Equipements</p>
          <img className={styles.vector} src={vectordown} alt=""></img>
        </div>
      ) : (
        <div className={styles.dropUp} onClick={() => setOpen(false)}>
          <p>Equipements</p>
          <img className={styles.vector} src={vectorup} alt=""></img>
        </div>
      )}

      {open && (
        <div className={styles.buttonOpen}>
          {equipements.map((equipements,i) => (
            <p key={i}>{equipements}</p>
          ))}
        </div>
      )}
    </div>
  );
}
export default Collapsible;
