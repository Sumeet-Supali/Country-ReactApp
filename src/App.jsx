import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";

import Header from "../src/components/Header.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
