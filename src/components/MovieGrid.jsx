import MovieCard from "./MovieCard.jsx"
import './MovieGrid.css'


function MovieGrid({ movies }){
    return(
        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    )
}
export default MovieGrid