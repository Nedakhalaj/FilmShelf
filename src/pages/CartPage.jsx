import { Link } from 'react-router-dom'
import EmptyState from '../components/EmptyState.jsx'
import './CartPage.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../store/cartSlice.js'

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  if (cartItems.length === 0) {
    return (
      <>
        <h1>Your cart</h1>
        <EmptyState message="Your cart is empty." />
        <Link to="/">Browse movies</Link>
      </>
    )
  }

  return (
    <>
      <h1>Your cart</h1>
      <ul className="cart-list">
        {cartItems.map((movie) => (
          <li key={movie.id} className="cart-item">
            <img className="cart-item__poster" src={movie.posterUrl} alt={movie.title} />
            <Link className="cart-item__title" to={`/movie/${movie.id}`}>
              {movie.title}
            </Link>
            <button
              className="button button--danger"
              onClick={() => dispatch(removeFromCart(movie.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CartPage
