import './SearchBar.css' 


function SearchBar({ query, onQueryChange }){
    return(
        <div className="search-bar">
            <label className="search-bar__label" htmlFor="search">
                Search movies
            </label>
            <input
            id="search"
            className="search-bar__input"
            type="search"
            placeholder="Type a title"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            />
        </div>
    )
}
export default SearchBar