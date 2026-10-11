import { useState } from "react";
import SearchBar from '../components/SearchBar.jsx'
import MovieSection from '../components/MovieSection.jsx'
import { fetchNowPlaying, fetchPopular, fetchTopRated } from '../api/tmdb.js'


function HomePage(){
    const [query, setQuery] = useState('')
    return(
        <>
        <h1>Discover movies</h1>
        <SearchBar query={query} onQueryChange={setQuery}/>
        <MovieSection title="Now Playing" fetchMovies={fetchNowPlaying} query={query}/>
        <MovieSection title="Popular" fetchMovies={fetchPopular} query={query}/>
        <MovieSection title="Top rated" fetchMovies={fetchTopRated} query={query}/>
        </>
    )
}
export default HomePage