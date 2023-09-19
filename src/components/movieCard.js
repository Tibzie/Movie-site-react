import React from "react";

const MovieCard = ({movieData}) => {
    return (
        <div className="movie-card">
            <h2>{movieData.Title}</h2>
            <p>{movieData.Genre}</p>
            <p>{movieData.Description}</p>
            <p>{movieData.Date}</p>
        </div>

    )

}

export default MovieCard;