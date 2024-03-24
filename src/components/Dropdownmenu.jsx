import React from "react";
import "./Dropdownmenu.css";
function Dropdownmenu({ setcountryname }) {
  return (
    <select onChange={(e) => setcountryname(e.target.value.toLowerCase())}>
      <option value="Asia">Asia</option>
      <option value="Africa">Africa</option>
      <option value="Europe">Europe</option>
      <option value="America">America</option>
      <option value="Ocenia">Ocenia</option>
    </select>
  );
}

export default Dropdownmenu;
