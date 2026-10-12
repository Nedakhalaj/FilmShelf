import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchMovie } from '../api/tmdb.js'
import Spinner from '../components/Spinner.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'

function MovieDetailPage({cart, onAddToCart, onRemoveFromCart}) {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      setIsLoading(true)
      setError(null)
      try {
        const result = await fetchMovie(id)
        setMovie(result)
      } catch (err) {
        console.error(err)
        setError("We couldn't load this movie. Check your connection and try again.")
      } finally {
        setIsLoading(false)
      }
    }

    load()
  }, [id])

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  const isInCart = cart.some((item) => item.id === movie.id)

  return (
    <article className="movie-detail">
      <Link to="/">← Back to movies</Link>
      <img src={movie.largePosterUrl} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>
        {movie.year} · {movie.runtime} min · {movie.genres.join(', ')}
      </p>
      <p>Rating: {movie.rating.toFixed(1)} / 10</p>
      <p>{movie.overview}</p>
            {isInCart ? (
        <button className="button button--danger" onClick={() => onRemoveFromCart(movie.id)}>
          Remove from cart
        </button>
      ) : (
        <button className="button" onClick={() => onAddToCart(movie)}>
          Add to cart
        </button>
      )}

    </article>
  )
}

export default MovieDetailPage
