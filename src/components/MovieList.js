import React from "react";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie) => (
                <div className="movie-card" key={movie.imdbID}>
                    <div className="movie-card__header">
                        <h2>{movie.Title}</h2>
                        <p>{movie.Year}</p>
                    </div>
                    <img src={movie.Poster} className="movie-card__thumbnail" alt={`poster of ${movie.Title}`} />
                    <div onClick={() => props.handleFavouritesClick(movie)}>
                        <FavouriteComponent />
                    </div>
                    
                </div>
            ))}
        </>
    );
};

export default MovieList;