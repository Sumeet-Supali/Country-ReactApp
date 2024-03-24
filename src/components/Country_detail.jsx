import React, { useEffect, useState } from "react";
import "./Countrydetail.css";

function Country_detail() {
  const countryname = new URLSearchParams(location.search).get("name");

  const [country, setcountry] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        setcountry({
          name: data.name.common,
          native: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          capital: data.capital,
          subregion: data.subregion,
          img: data.flags.png,
        });
      });
  }, []);

  console.log(countryname);
  return (
    <div className="container">
      <a href="/">
        <button className="btn">Back</button>
      </a>
      <div className="img">
        <img src={country.img} className="image" alt="" srcset="" />
      </div>

      <h1>{country.name}</h1>
      <p>
        <b>Native Name:</b>
        {country.native}
      </p>
      <p>
        <b>population:</b>
        {country.population}
      </p>
      <p>
        <b>Region Name:</b>
        {country.region}
      </p>
      <p>
        <b>Sub-Region Name:</b>
        {country.subregion}
      </p>
      <p>
        <b>Captail Name:</b>
        {country.capital}
      </p>
    </div>
  );
}

export default Country_detail;
