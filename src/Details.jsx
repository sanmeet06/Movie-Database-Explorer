import React from "react";
import Header from "./Header";
import './Details.css'
import { useLocation } from 'react-router-dom';
const Details =() =>{
    const location = useLocation();
  const movieData = location.state;
    console.log(movieData);
    const movieDetails = location?.state; // Use optional chaining to handle possible undefined
  if (!movieDetails) {
    return <div>No movie details found.</div>;
  }
  const imageUrl = "https://www.themoviedb.org/t/p/original/";
    //const { id, title, release_date, popularity, overview, backdrop_path, poster_path } = location.state;
   // console.log(title);
    return (
       
        <div>
        <Header />
        <div className="details-container">
          <div className="image-container">
          <img src={
            movieData.backdrop_path ? `${imageUrl}${movieData.backdrop_path}`: "https://via.placeholder.com/400"
          } alt={movieData.title} />
          </div>
          <div className="info-container">
            <h2>{movieData.title}</h2>
            <p>Popularity: {movieData.popularity}</p>
            <p>Release Date: {movieData.release_date}</p>
            <p>Overview: {movieData.overview}</p>
          </div>
        </div>
      </div>
    );

}

export default Details;