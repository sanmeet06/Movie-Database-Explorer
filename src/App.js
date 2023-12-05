import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar'
import Card from './Card'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Details from './Details'
import Home from './Home'

    const name = "Sanmeet";
    
    
      const App = () => {
      //   const [movies, setMovies] = useState([]);
      //   const searchMovies = async(title) =>{
      //     const response = await fetch(`https://api.themoviedb.org/3/search/movie?&page=1&query=${title}`,
      //     {
      //       method: 'GET',
      //       headers: {
      //         accept: 'application/json',
      //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWU1OGFmMWQ1OGZiZjYyZjBkYjQ2MDhmMTlkMDhkOCIsInN1YiI6IjY1NmRkZWJhNTFmOTlhMDBjNjU3YmVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uGmghq0HSwt1su8dc2jqq5v8KEM-feOFejtJxBHbiTU'
      //       }
      //     }
      //     )
      //     const data = await response.json();
      //     const results = data.results;
      //     setMovies(results);
      // }
      // useEffect(()=>{
      //   searchMovies('spiderman');
      // },[])
      // const handleSearch = (searchText) => {
      //   searchMovies(searchText);
      // };

        return (
          
          <div className="App">
            <Header/>
            <SearchBar />
            {/* <div>
            {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/details/${movie.id}`}>
            <Card key={movie.id} movie={movie} />
          </Link>
          ))}
        </div>
      ) : (<></>)} */}
      {/* </div> */}
      <Routes>
          <Route path="/details/:movieId" element={<Details/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
          </div>
           
          // <div>
          //   <Routes>
          //   <Route path="/"  element={<Details/>} />
          //   </Routes>
          //   </div>

        );

      }

export default App;
