import './App.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [pokemonData, setPokemonData] = useState<{name: string, base_experience: string} | null >(null);
  const[pokemonImage, setPokemonImage] = useState<string>('');
  const [error, setError] = useState<string>('');


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => {
        setPokemonData(response.data);
        setPokemonImage(response.data.sprites.front_shiny);
        console.log(response.data);
      })
  
      .catch(() => {
        setError('Pokemon not found');
      });
  }, []); 
  
  return (
    <>
      <h1>Pokemon</h1>

      { pokemonData &&
        <>
          <h2>{pokemonData.name}</h2> 
          <p>{pokemonData.base_experience}</p>
          <img src={pokemonImage} alt={`El pokemon es ${pokemonData.name}`} />
       </>
      }
      
      {error && <p>{error}</p>}
    </>
  );
}

export default App


