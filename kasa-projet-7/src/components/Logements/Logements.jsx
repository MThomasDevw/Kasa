import React from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import list from "../../datas/logementList.json";
import style from "../Cards/Cards.module.css";

function Logements() {
  return (
    <div className={style.wrapper}>
      <div className={style.cardContainer}>
        {list.map((logement, id) => (
          <div className={style.cardLogement} key={id}>
            <Link to={`/Logement/${logement.id}`}>
              <Cards cover={logement.cover} title={logement.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logements;
