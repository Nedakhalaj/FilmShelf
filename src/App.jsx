import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage'
import MovieDetailPage from './pages/MovieDetailPage'
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  const [cart, setCart] = useState([])

  function addToCart(movie) {
    setCart([...cart, movie])
  } 

  function removeFromCart(id) {
    setCart(cart.filter((movie) => movie.id !== id))
  }


 return (
    <div className="app">
      <Navbar cartCount={cart.length} />
      <main className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/movie/:id"
            element={
              <MovieDetailPage
                cart={cart}
                onAddToCart={addToCart}
                onRemoveFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} onRemoveFromCart={removeFromCart} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App