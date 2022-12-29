import React from "react";
import style from "./Rating.module.css";
import starsGrey from "../assets/starsGrey.png";
import starsOrange from "../assets/starsOrange.png";

function Rating({ starRating }) {
  const ratingStar = [1, 2, 3, 4, 5];
  return (
    <div className={style.ratings}>
      {ratingStar.map((number) =>
        starRating >= number ? (
          <img
            key={number}
            className={style.stars}
            src={starsOrange}
            alt="full star"
          />
        ) : (
          <img
            key={number}
            className={style.stars}
            src={starsGrey}
            alt="empty star"
          />
        )
      )}
    </div>
  );
}

export default Rating;
