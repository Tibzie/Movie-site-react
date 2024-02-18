import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import AddFavourites from "../components/AddFavourites";

const API_KEY = "2a2ac055";

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    return (
        <div className="">
            <div className="movie-header-wrapper">
                <MovieListHeading heading="Movies" />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className="movie-card-wrapper">
                <MovieList movies={movies} favouriteComponent={AddFavourites} handleFavouritesClick={addFavouriteMovie} />
            </div>
            <div className="movie-wrapper">
                <MovieListHeading heading="Favourites" />
            </div>
            <div className="movie-card-wrapper">
                <MovieList movies={favourites} favouriteComponent={AddFavourites} />
            </div>
        </div>
    )
}

export default Home;