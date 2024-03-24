import React from "react";
import "./CARD.css";
import me from "../assets/me.jpg";
function CARD({ name, population, region, capital, img }) {
  return (
    <div className="card">
      <a href={`/Country?name=${name}`}>
        <div className="card-img">
          <img src={img} alt="img" />
        </div>

        <div className="card-contents">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population: </b>
            {population}
          </p>
          <p>
            <b>Region: </b>
            {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </a>
    </div>
  );
}

export default CARD;
