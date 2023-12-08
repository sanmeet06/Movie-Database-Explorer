import React,{useState} from "react";
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({movie:{id,title,overview,release_date,popularity,backdrop_path,poster_path},movie, addToFavorites} ) =>{
    const imageUrl = "https://www.themoviedb.org/t/p/original/";
    const releaseYear = release_date ? release_date.substring(0, 4) : "Unknown";

    return (
        <div className="movie">
            <div>
                <p>{releaseYear}</p>        
            </div>
            <div>
                <img src={
                    backdrop_path ? `${imageUrl}${backdrop_path}`: "https://via.placeholder.com/400"
                } alt={title} />
            </div>
            <div>
                <span>{popularity}</span>
                <h3>{title} </h3>
                <button className="hoverButton" onClick={() => addToFavorites(movie)}>Add to favourites</button>
            </div>
    </div>
    );


}

export default Card;