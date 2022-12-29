import styles from "./Tag.module.css";
import React from "react";

function Tag({ tags }) {
  return (
    <article className={styles.tag} >
      {tags.map((tag, i) => (
        <span key={i}>{tag}</span>
      ))}
    </article>
  );
}

export default Tag;
