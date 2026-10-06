import './Navbar.css'

function Navbar() {
    return(
        <nav className="navbar">
            <a className="navbar__brand" href="/">FilmShelf</a>
            <a className="navbar__cart"  href="/cart">Cart (0)</a>
        </nav>
    )
}
export default Navbar