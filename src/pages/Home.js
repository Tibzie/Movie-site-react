import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/movieCard";

const API_KEY = "2a2ac055";

const Home = () => {

    const [movieData, setMovies] = useState([]);

    useEffect(() => {
        const movieTitle = "Avatar";

        axios.get(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${API_KEY}`)
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error)
            });
    }, []);

    return(
        <div class="movie-card-wrapper">
            {/* <MovieCard title="Spiderman" genre="Action" description="A superhero movie" date="2023" /> */}
            {/* <MovieCard title={movie1.Title} genre={movie1.Year}/> */}
            {movieData && <MovieCard movieData={movieData} />} 
        </div>
    )
}

export default Home;