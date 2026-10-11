import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage'
import MovieDetailPage from './pages/MovieDetailPage'
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return(
    <div className="app">
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App