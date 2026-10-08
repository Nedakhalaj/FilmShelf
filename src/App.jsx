
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import MovieGrid from './components/MovieGrid.jsx'
import SearchBar from './components/SearchBar.jsx'
import Spinner from './components/Spinner.jsx'
import ErrorMessage from './components/ErrorMessage.jsx'
import { fetchNowPlaying } from './api/tmdb.js'



function App() {
const [query, setQuery] = useState('')
const [movies, setMovies] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
async function loadMovies() {
  try{
    const result = await fetchNowPlaying()
    setMovies(result)
  }catch (err){
    console.error(err)
    setError("We couldn't load the movies. check your connection and try again")
  }finally{
    setIsLoading(false)
  }
}
loadMovies()
}, [])

const visibleMovies = movies.filter((movie) =>
  movie.title.toLowerCase().includes(query.toLocaleLowerCase())
)
return(
  <div className="app">
    <Navbar />
    <main className="page">
    <h1>Lates movies</h1>
    <SearchBar query={query} onQueryChange={setQuery} />
    {isLoading && <Spinner />}
    {error && <ErrorMessage message={error} />}
    {!isLoading && !error && <MovieGrid movies={visibleMovies} />}
      </main>
  </div>
)
}

export default App
