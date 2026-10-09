const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

async function request(path, params = {}){
    const searchParams = new URLSearchParams({api_key: API_KEY, ...params})
    const response = await fetch(`${BASE_URL}${path}?${searchParams}`)

        if (!response.ok) {
            throw new Error(`TMDb request failed with status ${response.status}`)
        }
        return response.json()
}

function toMovie(raw){
    return{
        id: raw.id,
        title: raw.title,
        year: raw.release_date ? raw.release_date.slice(0, 4) : 'Unknown',
        posterUrl: raw.poster_path ? imageUrl(raw.poster_path) : null,
        overview: raw.overview,
        rating: raw.vote_average,
    }
}


async function fetchMovieList(path){
    const data = await request(path)
    return data.results.map(toMovie)
}

export function fetchNowPlaying() {
    return fetchMovieList('/movie/now_playing')
}

export function fetchPopular(){
    return fetchMovieList('/movie/popular')
}

export function fetchTopRated(){
    return fetchMovieList('/movie/top_rated')
}

export function imageUrl(path, size = 'w342'){
    return `${IMAGE_BASE_URL}/${size}${path}`
}

