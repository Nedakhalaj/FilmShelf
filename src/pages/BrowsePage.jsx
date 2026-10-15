import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchNowPlaying, fetchPopular, fetchTopRated } from '../api/tmdb.js'
import MovieGrid from '../components/MovieGrid.jsx'
import Spinner from '../components/Spinner.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import NotFoundPage from './NotFoundPage.jsx'

const LISTS = {
  'now-playing': { title: 'Now playing', fetchMovies: fetchNowPlaying },
  popular: { title: 'Popular', fetchMovies: fetchPopular },
  'top-rated': { title: 'Top rated', fetchMovies: fetchTopRated },
}

function BrowsePage() {
  const { list } = useParams()
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const selectedList = LISTS[list]

  useEffect(() => {
    if (!selectedList) {
      return
    }

    async function load() {
      setIsLoading(true)
      setError(null)
      try {
        const result = await selectedList.fetchMovies()
        setMovies(result)
      } catch (err) {
        console.error(err)
        setError("We couldn't load these movies. Check your connection and try again.")
      } finally {
        setIsLoading(false)
      }
    }

    load()
  }, [selectedList])

  if (!selectedList) {
    return <NotFoundPage />
  }

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
    <>
      <Link to="/">← Back to movies</Link>
      <h1>{selectedList.title}</h1>
      <MovieGrid movies={movies} />
    </>
  )
}

export default BrowsePage
