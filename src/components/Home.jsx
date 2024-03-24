import Searchbar from "./Searchbar.jsx";
import Dropdownmenu from "./Dropdownmenu.jsx";

import CARDCONTAINER from "./CARDCONTAINER.jsx";
import { useState } from "react";
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faMoon } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [countryname, setcountryname] = useState("");

  const [color, setcolor] = useState(true);

  const [colorname, setcolorname] = useState("Dark-mode");

  let changecolor = () => {
    if (color === true) {
      setcolor(false);
      setcolorname("Light-Mode");
    } else {
      setcolor(true);
      setcolorname("Dark-Mode");
    }
  };

  return (
    <div className={`main ${color ? "dark" : "light"}`}>
      <div className="subheading">
        <Searchbar setcountryname={setcountryname} />
        <Dropdownmenu setcountryname={setcountryname} />
        <p onClick={changecolor}>
          <FontAwesomeIcon icon={faMoon} className="icon" />
          {"      "}
          {colorname}
        </p>
      </div>
      <CARDCONTAINER countryname={countryname} />
    </div>
  );
}

export default Home;
