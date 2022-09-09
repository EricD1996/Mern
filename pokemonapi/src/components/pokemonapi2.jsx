import React, {useState} from 'react';
const Pokemon2 = (props) => {
    const [pokemonlist, setPokemonList] = useState([]);

    const getPokemonList = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemonList(response.results))
    };

    return (
        <div>
            <button onClick={getPokemonList}>Fetch Pokemon</button>
            {pokemonlist.map((pokemon, index) => {
                return (
                    <div key={index}>{pokemon.name}</div>
                )
            })}
        </div>
    )

}
export default Pokemon2;