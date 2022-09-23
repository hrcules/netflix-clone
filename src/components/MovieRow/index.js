import React, { useState } from "react";
import "react-icons/ri";

import "./styles.css";

export default function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let positionX = scrollX + Math.round(window.innerWidth / 2);
    if (positionX > 0) {
      positionX = 0;
    }
    setScrollX(positionX);
  };

  const handlerightArrow = () => {
    let positionX = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150;

    if (window.innerWidth - listWidth > positionX) {
      positionX = window.innerWidth - listWidth - 60;
    }

    setScrollX(positionX);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow__left" onClick={handleLeftArrow}>
        <i class="ri-arrow-left-s-line" style={{ fontSize: "3rem" }}></i>
      </div>
      <div className="movieRow__right" onClick={handlerightArrow}>
        <i class="ri-arrow-right-s-line" style={{ fontSize: "3rem" }}></i>
      </div>

      <div className="movieRow__listarea">
        <div
          className="movieRow__list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow__item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
