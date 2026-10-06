
import Navbar from './components/Navbar.jsx'
import MovieCard from './components/MovieCard.jsx'

const sampleMovie = {
  id: 1,
  title: 'Inception',
  year: 2010,
  posterUrl: 'https://image.tmdb.org/t/p/w342/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',

}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="page">
        <h1>Latest movies</h1>
         <MovieCard movie={sampleMovie} />
      </main>
    </div>  
  )
}

export default App
