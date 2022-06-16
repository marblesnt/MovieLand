import { useEffect } from 'react';
import './App.css';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=3550283d';

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

    useEffect(() => {
      searchMovies('Superman');
    },[])

  return (

    <div className='app'>

      <h1>Search Movie</h1>

      <div className='search'>
        
      </div>

    </div>
  );
}

export default App;
