import React from "react";
import "./Loading.css";
import pikachuGif from "./assets/pikachu-gif.gif";

const Loading = () => {
  return (
    <div className="loadingContainer">
      <div className="pikachuGif">
        <img src={pikachuGif} alt="pikachugif" />
      </div>
      <div className="loadingText">
        <h3>
          Loading
          <div className="pokeballIcon"></div>
          <div className="pokeballIcon"></div>
          <div className="pokeballIcon"></div>
        </h3>
      </div>
    </div>
  );
};

export default Loading;
