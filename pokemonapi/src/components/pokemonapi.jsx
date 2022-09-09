import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    
    // useEffect(() => {
    //     console.log("iam here")
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    //       .then(response => {
    //         return response.json()})
    //       .then(response => setPokemon({
    //         name: response.results
    //       }))
    //   }, []);

    const SubmitHandler = () => {
        console.log("button clicked")
        setIsClicked(true);
        console.log(isClicked);
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {setPokemon(response.data.results)})
    }

      return (
        <div>
            <button onClick={SubmitHandler}>Fetch Pokemon</button>
            <div>
              {isClicked ? pokemon.map((poke, index) =>{
                return(
                  <div key={index}>{poke.name}</div>
                );
              }) : <div></div>}
            </div>
        </div>
      );

}

export default Pokemon;