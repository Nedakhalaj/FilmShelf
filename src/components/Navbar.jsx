import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <nav className="navbar">
            <Link className="navbar__brand" to="/">FilmShelf</Link>
            <Link className="navbar__cart"  to="/cart">Cart (0)</Link>
        </nav>
    )
}
export default Navbar