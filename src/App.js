import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar'
import Card from './Card'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Details from './Details'
import Home from './Home'
import Favorites from './Favorites';

      const App = () => {
        const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, movie]);
      console.log(favorites);
      alert('Added to favorites!');
    } else {
      alert('Movie is already in favorites!');
    }
  };
  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== id));
    // alert('Removed from favorites!');
  };
        return (
          
          <div className="App">
           
      <Routes>
          <Route path="/details/:movieId" element={<Details/>} />
          <Route path="/" element={<Home addToFavorites={addToFavorites} favorites={favorites}/>} />
          <Route path="/favorites" element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
        </Routes>
          </div>
           
        );

      }

export default App;
