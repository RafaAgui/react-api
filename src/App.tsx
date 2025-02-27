import './App.scss';
import useRickandmorty from './hooks/useApi';



function App() {

  const { data, error, loading } = useRickandmorty('', 'GET', null, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main>
      <h1 className='title'>rick and morty</h1>
      <ul className='caracters'>
      {data && data.map((rickandmorty, index) => (
        <a href={rickandmorty.url} target='_blank' rel='noreferrer' key={index}>
          <li className='caracter'>
            <h2 className='caracter__title'>{rickandmorty.name}</h2>
            <img className='caracter__image' src={rickandmorty.image} alt={`avatar de ${rickandmorty.name}`} />
            <p className='caracter__text'>Status: {rickandmorty.status}</p>
            <p className='caracter__text'>Species: {rickandmorty.species}</p>
          </li>
        </a>
      ))}
      </ul>
    </main>
  );
}

export default App;


