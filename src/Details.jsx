import React from "react";
import Header from "./Header";
import './Details.css'
const Details =({ id, title, release_date, popularity, overview,  backdrop_path, poster_path }) =>{
   // console.log(title);
    return (
       
    <div className="movieDetails">
        
        <p>This is a test</p>
        {/* <p>{popularity}</p>
        <p>{release_date}</p> */}
    </div>
    );

}

export default Details;