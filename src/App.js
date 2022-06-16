import { useEffect } from 'react';
import './App.css';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=3550283d';

const App = () => {

  const searchMovies = async (Year) => {
    const response = await fetch (`${API_URL}&s=${Year}`);
    const data = await response.json();

    console.log(data);
  }

    useEffect(() => {
      searchMovies('2005');
    },[])

  return (
    <h1>App</h1>
  );
}

export default App;
