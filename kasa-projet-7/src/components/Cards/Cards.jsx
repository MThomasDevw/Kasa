import React from "react";
import style from "./Cards.module.css";

function Cards({ cover, title }) {
  // récupération des props 
  return (
    <article className={style.cards}>
      <img src={cover} alt={`Logement  ${title}`} className={style.cardsImg} />
      <p className={style.cardsText}>{title}</p>
    </article>
  );
}

export default Cards;
