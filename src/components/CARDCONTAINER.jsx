import React, { useContext, useEffect, useState } from "react";
import "./CARDCONTAINER.css";
import CARD from "./CARD";

// import data from "../assets/data.js";

function CARDCONTAINER({ countryname }) {
  let [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((eachdata) => {
        setdata(eachdata);
        // console.log(data);
      });
  }, []);

  let array = data
    .filter(
      (e) =>
        e.name.common.toLowerCase().includes(countryname) ||
        e.region.toLowerCase().includes(countryname)
    )
    .map((e) => (
      <CARD
        name={e.name.common}
        population={e.population}
        region={e.region}
        capital={e.capital}
        img={e.coatOfArms.png}
      />
    ));

  return <div className="cards">{array}</div>;
}

export default CARDCONTAINER;
