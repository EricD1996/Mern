// import React, {useEffect, useState} from "react";
import './App.css';
import Pokemon from './components/pokemonapi'
function App() {
  // const [pokemon, setPokemon] = useState([]);
  
  // const getPokemon = () => {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
  //     .then(response => response.json())
  //     .then (response => setPokemon({
  //       name: response.results
  //     }))
  // };
  
  
  
  return (
      <Pokemon></Pokemon>
  );
}

export default App;
