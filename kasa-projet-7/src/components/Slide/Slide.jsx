import React from "react";
import style from "./Slide.module.css";
import { useState } from "react";
import vectorLeft from "../assets/vectorLeft.png";
import vectorRight from "../assets/vectorRight.png";



function Slider({ images }) {
  //On initialise la pagination à 0 pour afficher la première image du tableau d'images
  const [pagination, setPagination] = useState(0);

  //Si la pagination est inférieur à la longueur du tableau d'images, on incrémente de 1 sinon on remet à 0
  const nextPagination = () => {
    if (pagination < images.length - 1) {
      setPagination(pagination + 1);
    } else {
      setPagination(0);
    }
  };

  //Si la pagination est supérieur à 0, on décrémente de 1 sinon on remet à la longueur du tableau d'images
  const prevPagination = () => {
    if (pagination > 0) {
      setPagination(pagination - 1);
    } else {
      setPagination(images.length - 1);
    }
  };

  //affiche flèches de navigation 
  const arrowShow = () => {
    if (images.length > 1) {
      return (
        <div>
          <img
            src={vectorRight}
            alt=""
            className={style.sliderRight}
            onClick={nextPagination}
          ></img>
          <img
            src={vectorLeft}
            alt=""
            className={style.sliderLeft}
            onClick={prevPagination}
          ></img>
        </div>
      );
    }
  };

  return (
    <div className={style.slider}>
      <div className={style.sliderContainer}>
        {arrowShow()}
        <img className={style.sliderImg} src={images[pagination]} alt="" />
        <div className={style.sliderCount}>
          {pagination + 1}/{images.length}
        </div>
      </div>
    </div>
  );
}

export default Slider;
