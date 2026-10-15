
# FilmShelf

A movie shop web app built with React. Browse current, popular and top rated films from TMDb, open a film to see its details, and collect films in a shopping cart that is saved between visits.

Final project in the Mobile Application Developer program at Folkuniversitetet (2025–2027).

## Features

- Home page with three horizontal rows: Now playing, Popular and Top rated
- Search that filters the movies in all rows while you type
- "See all" page with a responsive grid for each list
- Detail page for each film with poster, year, runtime, genres, rating and overview
- Shopping cart: add and remove films from the detail page, item count in the navbar, cart page
- The cart is kept after a page refresh
- Loading spinner, error messages and empty states for every view that fetches data
- Not found page for unknown addresses

## Built with

- React, set up with Vite
- React Router for the pages
- Redux Toolkit for the cart state
- localStorage for saving the cart
- Plain CSS with CSS variables
- The TMDb API for all movie data

## Run it locally

1. Clone the repository and install the dependencies:

   ```
   git clone https://github.com/Nedakhalaj/FilmShelf.git
   cd FilmShelf
   npm install
   ```

2. Get a free API key at themoviedb.org (Settings → API).

3. Create a file called `.env` in the project root:

   ```
   VITE_TMDB_API_KEY=your_key_here
   ```

4. Start the app:

   ```
   npm run dev
   ```

   Then open the address shown in the terminal, usually http://localhost:5173.

## Project structure

```
src/
  api/          TMDb requests (tmdb.js)
  components/   Reusable pieces: MovieCard, MovieRow, MovieGrid, SearchBar, Navbar ...
  pages/        One component per page: Home, Browse, Movie detail, Cart, Not found
  store/        Redux store and cart slice
```

## Data

This product uses the TMDB API but is not endorsed or certified by TMDB.
