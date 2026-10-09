import './MovieSection.css'
import { useState, useEffect } from 'react'
import MovieRow from './MovieRow'
import Spinner from './Spinner'
import ErrorMessage from './ErrorMessage'
import EmptyState from './EmptyState'

function MovieSection({ title, fetchMovies, query }) {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const[error, setError] = useState(null)

    useEffect(() => { 
      async function load(){
        try{
            const result = await fetchMovies()
            setMovies(result)
        }catch (err) {
            console.error(err)
            setError("We couldn't load these movies. Check your connection and try again.")
        }finally{
            setIsLoading(false)
        }
    }

    load()
}, [fetchMovies])

const visibleMovies = movies.filter((movie) =>
movie.title.toLowerCase().includes(query.toLowerCase()))

const isEmpty = !isLoading && !error && visibleMovies.length === 0
const hasMovies = !isLoading && !error &&visibleMovies.length > 0 

return(
    <section className="movie-section">
        <div className="movie-section__header">
            <h2 className="movie-section__title">{title}</h2>
            <a className="movie-section__link" href="/browse">See all</a>
        </div>
        {isLoading && <Spinner />}
        {error && <ErrorMessage message={error} />}
        {isEmpty && <EmptyState message={`No movies match "${query}".`} />}
        {hasMovies && <MovieRow movies={visibleMovies} />}
    </section>
)
}
export default MovieSection