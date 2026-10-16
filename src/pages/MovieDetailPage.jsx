import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchMovie } from '../api/tmdb.js'
import Spinner from '../components/Spinner.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import { useSelector, useDispatch } from 'react-redux'
import {addToCart, removeFromCart} from '../store/cartSlice.js'
import './MovieDetailPage.css'


function MovieDetailPage() {
  const { id } = useParams()
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch =useDispatch()
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

  const isInCart = cartItems.some((item) => item.id === movie.id)

    return (
    <article className="movie-detail">
      <div
        className="movie-detail__background"
        style={{ backgroundImage: `url(${movie.largePosterUrl})` }}
      />

      <Link className="movie-detail__back" to="/">← Back to movies</Link>

      <div className="movie-detail__glass">
        <img
          className="movie-detail__poster"
          src={movie.largePosterUrl}
          alt={movie.title}
        />

        <div className="movie-detail__info">
          <h1 className="movie-detail__title">{movie.title}</h1>
          <p className="movie-detail__meta">
            {movie.year} · {movie.runtime} min · {movie.genres.join(', ')}
          </p>
          <p className="movie-detail__rating">★ {movie.rating.toFixed(1)} / 10</p>
          <p className="movie-detail__overview">{movie.overview}</p>

          {isInCart ? (
            <button className="button button--danger" onClick={() => dispatch(removeFromCart(movie.id))}>
              Remove from cart
            </button>
          ) : (
            <button className="button" onClick={() => dispatch(addToCart(movie))}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </article>
  )

}

export default MovieDetailPage
