import React from "react";
import "./PokedexItem.css";

const PokedexItem = (pokemon) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-id">#132</div>
      <div className="pokemon-image">
        <img src={pokemon.pokemon.sprites.other["official-artwork"].front_default ?? ''} alt="Ditto" />
      </div>
      <div className="pokemon-name">
        <h2>{pokemon.pokemon.name}</h2>
      </div>
    </div>
  );
};

export default PokedexItem;
