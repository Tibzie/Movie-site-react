import React from "react";

const MovieCard = (props) => {
    return (
        <div className="movie-card">
            <h2>{props.title}</h2>
            <p>{props.genre}</p>
            <p>{props.description}</p>
            <p>{props.date}</p>
        </div>

    )

}

export default MovieCard;