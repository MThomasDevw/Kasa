import Slider from "../../components/Slide/Slide";
import React from "react";
import list from "../../datas/logementList.json";
import style from "../Logement/Logement.module.css";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import CollapseDescription from "../../components/Collapse/CollapseDescription";
import CollapseEquipments from "../../components/Collapse/CollapseEquipments";
import { useParams, Navigate } from "react-router-dom";

function Logement() {
  const params = useParams();
  const logement = list.find(({ id }) => id === params.id);

  if (logement === undefined) return <Navigate to="/404" />;

  return (
    <div className={style.logement}>
      <div className={style.logementBody}>
        <Slider images={logement.pictures} />
        <div className={style.logementDescription}>
          <div className={style.locationHost}>
            <div className={style.logementLocation}>
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
              <div className={style.tag}>
                <Tag tags={logement.tags} key={logement.id}/>
              </div>
            </div>
          </div>
          <div className={style.tagRating}>
            <div className={style.host}>
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.title} />
            </div>
            <div className={style.rating}>
              <Rating starRating={logement.rating} />
            </div>
          </div>
        </div>
        <div className={style.vector}>
          <CollapseDescription description={logement.description} />
          <CollapseEquipments equipements={logement.equipments} />
        </div>
      </div>
    </div>
  );
}
export default Logement;
