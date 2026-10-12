import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar({ cartCount }) {
    return(
        <nav className="navbar">
            <Link className="navbar__brand" to="/">FilmShelf</Link>
            <Link className="navbar__cart"  to="/cart">Cart ({cartCount})</Link>
        </nav>
    )
}
export default Navbar