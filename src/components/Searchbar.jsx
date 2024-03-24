import React, { useContext } from "react";
import "./Searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Searchbar({ setcountryname }) {
  return (
    <div className="searchbox">
      <FontAwesomeIcon icon={faSearch} />

      <input
        type="text"
        placeholder="Search your country...."
        onChange={(e) => setcountryname(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default Searchbar;
