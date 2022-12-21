import React from "react";

function Search({searchPokemon, onSearchPokemonChange}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          type="text"
          id="search"
          placeholder="Type to search..."
          value={searchPokemon}
          onChange={
            (e) =>
              onSearchPokemonChange(e.target.value)
          }
          />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
