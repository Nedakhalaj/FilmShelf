import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
    const cartCount = useSelector((state) => state.cart.items.length)
    return(
        <nav className="navbar">
            <Link className="navbar__brand" to="/">FilmShelf</Link>
            <Link className="navbar__cart" to="/cart">
  Cart
  <span className="navbar__count">{cartCount}</span>
</Link>

        </nav>
    )
}
export default Navbar