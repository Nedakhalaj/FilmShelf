import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__brand">FilmShelf</p>
      <p className="footer__note">
        Movie data from{' '}
        <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer">
          TMDB
        </a>
        . This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </footer>
  )
}

export default Footer
