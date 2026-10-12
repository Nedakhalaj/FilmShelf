import './MovieCard.css'
import { Link } from 'react-router-dom'

function MovieCard({ movie }){
    return (
    <article className="movie-card">
        <Link className="movie-card__link" to={`/movie/${movie.id}`}>
        <img
        className="movie-card__poster"
        src={movie.posterUrl}
        alt={movie.title}
        />
        <h3 className="movie-card__title">{movie.title}</h3>
        </Link>
        <p className="movie-card__meta">{movie.year}</p>
        <button className="movie-card__button">Add to cart</button>
    </article>
    )
}
export default MovieCard