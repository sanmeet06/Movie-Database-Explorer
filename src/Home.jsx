import App from './App';
import {React, useState,useEffect } from 'react';
import Card from './Card';

const Home =() =>{
    const [movies, setMovies] = useState([]);
    const searchMovies = async(title) =>{
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?&page=1&query=${title}`,
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
        {movies.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
    </div>);
}

export default Home;