import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {


  // import pokemon from db.json, pass down as props
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
      fetch("http://localhost:3001/pokemon")
        .then(resp => resp.json())
        .then(data => setPokemon(data))
    }, [])


  // set up <Search /> functionality
    const [searchPokemon, setSearchPokemon] = useState("")
    const displayedPokemon = pokemon.filter((poke) => {
      return poke.name.toLowerCase().includes(searchPokemon.toLowerCase())
    })


  // set up <PokemonForm /> funcionality
    function handleAddPokemon(newPoke) {
      const updatedPokemonArray = [...pokemon, newPoke]
      setPokemon(updatedPokemonArray)
    }

    function handleDeletePokemon(id) {
      const updatedPokemonArray = pokemon.filter((poke) =>
        poke.id !== id)
        setPokemon(updatedPokemonArray)
    }
    
    function handleUpdatePokemon(updatedPoke) {
      const updatedPokemonArray = pokemon.map((poke) => {
        if (poke.id === updatedPoke.id) {
          return updatedPoke
        } else {
          return poke
        }
      })
      setPokemon(updatedPokemonArray)
    }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        pokemon={pokemon}
        onAddPoke={handleAddPokemon}
      />
      <br />
      <Search 
        searchPokemon={searchPokemon}
        onSearchPokemonChange={setSearchPokemon}
      />
      <br />
      <h3>Pokedex</h3>
      <PokemonCollection 
        pokemon={displayedPokemon} // updated with .filter search var
        onDeletePoke={handleDeletePokemon}
        onUpdatePoke={handleUpdatePokemon}
      />
    </Container>
  );
}

export default PokemonPage;
