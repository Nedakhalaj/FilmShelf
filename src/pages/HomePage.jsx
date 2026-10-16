import { useState } from "react";
import SearchBar from '../components/SearchBar.jsx'
import MovieSection from '../components/MovieSection.jsx'
import { fetchNowPlaying, fetchPopular, fetchTopRated } from '../api/tmdb.js'
import './HomePage.css'


function HomePage(){
    const [query, setQuery] = useState('')
    return(
        <>
        <div className="home-header">
        <h1 className="home-header__title">Discover movies</h1>
        <SearchBar query={query} onQueryChange={setQuery}/>
        </div>
        <MovieSection title="Now playing" listId="now-playing" fetchMovies={fetchNowPlaying} query={query} />
        <MovieSection title="Popular" listId="popular" fetchMovies={fetchPopular} query={query} />
        <MovieSection title="Top rated" listId="top-rated" fetchMovies={fetchTopRated} query={query} />
        </>
    )
}
export default HomePage