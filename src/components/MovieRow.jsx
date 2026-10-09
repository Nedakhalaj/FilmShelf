import './MovieRow.css'
import MovieCard from './MovieCard'

function MovieRow({ movies }){
    return(
     <div className='movie-row'>
         {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    )
}

export default MovieRow