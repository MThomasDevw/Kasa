import styles from "./Collapse.module.css";
import { useState } from "react";
import vectordown from "../assets/vector-down.png";
import vectorup from "../assets/vector-up.png";

function Collapsible({ description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.buttonClose}>
      {!open ? (
        <div className={styles.dropDown} onClick={() => setOpen(true)}>
          <p>Description</p>
          <img className={styles.vector} src={vectordown} alt=""></img>
        </div>
      ) : (
        <div className={styles.dropUp} onClick={() => setOpen(false)}>
          <p>Description</p>
          <img className={styles.vector} src={vectorup} alt=""></img>
        </div>
      )}

      {open && (
        <div className={styles.buttonOpen}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
export default Collapsible;
