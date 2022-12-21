import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({
  pokemon, 
  onDeletePoke, 
  onUpdatePoke 
}) {

  return (
    // moved <h3> to Pokemon Page to stop from interfering with <PokemonCard />
    <Card.Group 
      itemsPerRow={6}
      >
      {pokemon.map(poke => (
        <PokemonCard 
          key={poke.id}
          name={poke.name}
          hp={poke.hp}
          sprites={poke.sprites}
          onDeletePoke={onDeletePoke}
          onUpdatePoke={onUpdatePoke}
        />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
