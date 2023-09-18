import React from "react";
import MovieCard from "../components/movieCard";

const Home = () => {
    return(
        <div class="movie-card-wrapper">
            <MovieCard title="Spiderman" genre="Action" description="A superhero movie" date="2023" />
        </div>
    )
}

export default Home;