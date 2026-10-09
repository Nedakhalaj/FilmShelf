
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import SearchBar from './components/SearchBar.jsx'
import MovieSection from './components/MovieSection.jsx'
import { fetchNowPlaying, fetchPopular, fetchTopRated } from './api/tmdb.js'

function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="app">
      <Navbar />
      <main className="page">
        <h1>Discover movies</h1>
        <SearchBar query={query} onQueryChange={setQuery} />
        <MovieSection title="Now playing" fetchMovies={fetchNowPlaying} query={query} />
        <MovieSection title="Popular" fetchMovies={fetchPopular} query={query} />
        <MovieSection title="Top rated" fetchMovies={fetchTopRated} query={query} />
      </main>
    </div>
  )
}

export default App

