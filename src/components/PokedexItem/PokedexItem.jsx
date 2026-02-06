import React from "react";
import "./PokedexItem.css";

const PokedexItem = () => {
  return (
    <div className="pokedex-item">
      <p className="pokedex-number">#001</p>
      <img src="./132-official.png" alt="Spearow" className="pokedex-image" />
      <div className="pokedex-name-box">
        <p className="pokedex-name">Aron</p>
      </div>
    </div>
  );
};

export default PokedexItem;
