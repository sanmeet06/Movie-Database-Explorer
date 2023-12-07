// Favorites.jsx
import React from 'react';
import './Card.css'
import Header from './Header';

const Favorites = ({ favorites,removeFromFavorites }) => {
    const imageUrl = "https://www.themoviedb.org/t/p/original/";
    console.log(favorites);
    const handleRemoveClick = (id) => {
        removeFromFavorites(id);
      };
  return (
    <div>
        <Header/>
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        <div className="container">
          {favorites.map((favorite) => (
            <div key={favorite.id}>
              <div className="movie">
             <div>
               <p>{favorite.releaseYear}</p>
               
             </div>
             <div>
               <img src={
                   favorite.backdrop_path ? `${imageUrl}${favorite.backdrop_path}`: "https://via.placeholder.com/400"
                 } alt={favorite.title} />
             </div>
       
             <div>
               <span>{favorite.popularity}</span>
               <h3>{favorite.title} </h3>
               <button className="removeButton" onClick={() => handleRemoveClick(favorite.id)}>Remove from favourites</button>
             </div>
           </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
};


export default Favorites;
