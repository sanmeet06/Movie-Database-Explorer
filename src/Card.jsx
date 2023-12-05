import React,{useState} from "react";
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({movie:{id,title,overview,release_date,popularity,backdrop_path,poster_path}}) =>{
    const imageUrl = "https://www.themoviedb.org/t/p/original/";
    const releaseYear = release_date ? release_date.substring(0, 4) : "Unknown";

    return (
       
    //     <div className="movie">
    //   <div>
    //     <p>{releaseYear}</p>
        
    //   </div>
    //   <div>
    //     {/* <Link to={{ pathname: `/details/${id}` }}> */}
    //     <img src={
    //         backdrop_path ? `${imageUrl}${backdrop_path}`: "https://via.placeholder.com/400"
    //       } alt={title} />
    //       {/* </Link> */}
    //   </div>

    //   <div>
    //     <span>{popularity}</span>
    //     <h3>{title} </h3>
    //     <button className="hoverButton">Add to favourites</button>
    //   </div>
    // </div>
    <div>
    {/* <h3>Title is ok</h3> */}
      <Link to={{ pathname: `/details/${id}` }}> 
    <img src={
            backdrop_path ? `${imageUrl}${backdrop_path}`: "https://via.placeholder.com/400"
           } alt={title} />
           </Link>
    </div>
    );


}

export default Card;