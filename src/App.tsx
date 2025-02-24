import './App.css'
import useApi from './hooks/useApi'


function App() {
  const { data, error, loading } = useApi<[]>('GET', null, []);
  console.log('llegan datos: ', data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <>
      <h1>Pokemon</h1>
      <ul>
      {data.map((user) => (
          <li key={user.id}><a href={user.url}>{user.name}</a></li>
        ))}
      </ul>
    </>
  );
}

export default App


