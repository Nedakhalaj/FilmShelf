import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Back to the home page</Link>
      </p>
    </>
  )
}

export default NotFoundPage
