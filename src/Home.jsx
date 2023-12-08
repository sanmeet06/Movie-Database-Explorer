
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import SearchBar from './SearchBar';
import Header from './Header';
import './Home.css';

const Home = ({ addToFavorites, favorites }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const searchMovies = async (title) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?&page=1&query=${title}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWU1OGFmMWQ1OGZiZjYyZjBkYjQ2MDhmMTlkMDhkOCIsInN1YiI6IjY1NmRkZWJhNTFmOTlhMDBjNjU3YmVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uGmghq0HSwt1su8dc2jqq5v8KEM-feOFejtJxBHbiTU',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const results = data.results;
      setMovies(results);
      setError(null);
    } catch (error) {
      setMovies([]);
      setError('Error fetching movies. Please try again later.');
    }
  };

  useEffect(() => {
    const storedSearchText = localStorage.getItem('searchText');
  if (storedSearchText) {
    searchMovies(storedSearchText);
  } else {
    searchMovies('spiderman'); // Default search
  }
  }, []);

  const handleSearch = (searchText) => {
    localStorage.setItem('searchText', searchText);
    searchMovies(searchText);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      {error ? (
        <div className='empty'>
          <h1>{error}</h1>
        </div>
      ) : (
        <div className='container'>
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <Link key={movie.id} to={`/details/${movie.id}`} state={{ ...movie }}>
                <Card key={movie.id} movie={movie} addToFavorites={addToFavorites} />
              </Link>
            ))
          ) : (
            <div className='empty'>
              <h1>No movies found with the above name. Please try again!</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
