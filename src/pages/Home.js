import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";

const API_KEY = "2a2ac055";

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search) {
            setMovies(responseJson.Search);
        }
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
                
                {/* {movieData && <MovieCard movieData={movieData} />}  */}
                <MovieList movies={movies} />
            </div>
        </div>
    )
}

export default Home;