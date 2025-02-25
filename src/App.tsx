import './App.css'
import usePokemon from './hooks/useApi'



function App() {
  const { data, error, loading } = usePokemon('GET', null, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <>
      <h1>Pokemon</h1>
      <ul>
      {data && data.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
      </ul>
    </>
  );
}

export default App


