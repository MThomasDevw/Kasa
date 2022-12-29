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
          <p>Service</p>
          <img className={styles.vector} src={vectordown} alt=""></img>
        </div>
      ) : (
        <div className={styles.dropUp} onClick={() => setOpen(false)}>
          <p>Service</p>
          <img className={styles.vector} src={vectorup} alt=""></img>
        </div>
      )}

      {open && (
        <div className={styles.buttonOpen}>
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </div>
      )}
    </div>
  );
}
export default Collapsible;
