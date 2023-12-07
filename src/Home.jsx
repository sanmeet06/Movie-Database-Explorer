import App from './App';
import React,{ useState,useEffect } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import Card from './Card';
import SearchBar from './SearchBar';
import Header from './Header';
import './Home.css'
const Home =({addToFavorites, favorites}) =>{
    const [movies, setMovies] = useState([]);
   
    const searchMovies = async(title) =>{
      const url = `https://api.themoviedb.org/3/search/movie?&page=1&query=${title}`;
      const response = await fetch(url,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWU1OGFmMWQ1OGZiZjYyZjBkYjQ2MDhmMTlkMDhkOCIsInN1YiI6IjY1NmRkZWJhNTFmOTlhMDBjNjU3YmVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uGmghq0HSwt1su8dc2jqq5v8KEM-feOFejtJxBHbiTU'
        }
      }
      )
      const data = await response.json();
      const results = data.results;
      setMovies(results);
  }
  useEffect(()=>{
    searchMovies('spiderman');
  },[])
  
  const handleSearch = (searchText) => {
    searchMovies(searchText);
  };

    return(
    <div>
        <Header/>
        <SearchBar onSearch={handleSearch}/>
            {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/details/${movie.id}`} state={{ ...movie }}>
            <Card key={movie.id} movie={movie} addToFavorites={addToFavorites} />
            </Link>
          ))}
        </div>
      ) : (<div className='empty'>
            <h1>No movies found with above name. Please try again!!</h1>
      </div>)} 
      </div>
    );
}

export default Home;