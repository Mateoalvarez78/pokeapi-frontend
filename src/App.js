// import Pokedex from "./components/main/Pokemon";
import Card from "./components/Section/card-pokemon";
import PostPokemon from "./components/main/agregar-pokemon/post-pokemon";
import Register from "./components/register/register";
import Inicio from "./components/Inicio/Inicio";
import Error from "./components/Error-404/Error";
import Login from "./components/Login/Login";
import Loading from "./components/Loading/Loading";
import "./App.css";

import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Pokedex = lazy(() => import("./components/main/Pokemon"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/agregarPokemon" element={<PostPokemon />}></Route>
        <Route
          path="/pokemones"
          element={
            <Suspense fallback={<Loading />}>
              <Pokedex />
            </Suspense>
          }
        ></Route>
        <Route path=":nombre" element={<Card />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
