import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PokedexItem from "../PokedexItem/PokedexItem";
import "./PokedexGrid.css";
import { getPokemonById, getPokemonList } from "../../api/ApiPokemon";

function PokedexGrid() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPokemons() {
      try {
        const data = await getPokemonList(151);

        const detailed = await Promise.all(
          data.results.map(async (p) => {
            return await getPokemonById(p.name);
          }),
        );

        setPokemons(detailed);
      } catch (error) {
        console.log("Error loading Pokémon", error);
      } finally {
        setLoading(false);
      }
    }

    loadPokemons();
  }, []);

  if (loading) return <p>Carregando Pokédex...</p>;

  return (
    <Container>
      <Row className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4">
        {pokemons.map((pokemon) => (
          <Col key={pokemon.id}>
            <PokedexItem pokemon={pokemon} />
          </Col>
        ))}
        ;
      </Row>
    </Container>
  );
}

export default PokedexGrid;
