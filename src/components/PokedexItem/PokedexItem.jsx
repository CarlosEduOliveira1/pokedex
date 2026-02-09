import React from "react";
import "./PokedexItem.css";

const PokedexItem = () => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-id">#132</div>
      <div className="pokemon-image">
        <img src="./132-official.png" alt="Ditto" />
      </div>
      <div className="pokemon-name">
        <h2>Ditto</h2>
      </div>
    </div>
  );
};

export default PokedexItem;
