import Pokedex from "./components/main/Pokemon";
import Card from "./components/Section/card-pokemon";
import "./App.css";

import React, { useState } from "react";
import funcionesApi from "./components/api/pokemonesApi";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/pokemones" element={<Pokedex />}></Route>
      <Route path=":nombre" element={<Card/>}></Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;

