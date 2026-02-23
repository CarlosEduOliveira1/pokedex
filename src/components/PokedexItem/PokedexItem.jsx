import React from "react";
import "./PokedexItem.css";

function formatPokeId(pokeNumber) {
  let pokeId = pokeNumber.toString();
  pokeId = pokeId.padStart(3, '0');

  return `#${pokeId}`;
}

const PokedexItem = (pokemon) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-id">{formatPokeId(pokemon.pokemon.id)}</div>
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
