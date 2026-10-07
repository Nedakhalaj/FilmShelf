
import Navbar from './components/Navbar.jsx'
import MovieGrid from './components/MovieGrid.jsx'
import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'




const sampleMovies = [{
  id: 27205,
  title: 'Inception',
  year: 2010,
  posterUrl: 'https://image.tmdb.org/t/p/w342/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
},
{
id: 550,
title: 'Fight Club',
year: 1999,
posterUrl: 'https://image.tmdb.org/t/p/w342/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
},
{
  id: 603,
  title: 'The Matrix',
  year: 1999,
  posterUrl: 'https://image.tmdb.org/t/p/w342/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
}
]

function App() {

  const [query, setQuery] = useState('')

  const visibleMovies = sampleMovies.filter((movie) =>
  movie.title.toLowerCase().includes(query.toLocaleLowerCase())
  )

  return (
    <div className="app">
      <Navbar />
      <main className="page">
        <h1>Latest movies</h1>
        <SearchBar query={query} onQueryChange={setQuery} />
         <MovieGrid movies={visibleMovies} />
      </main>
    </div>  
  )
}

export default App
