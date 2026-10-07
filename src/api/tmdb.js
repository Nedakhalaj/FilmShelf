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
export function fetchNowPlaying(){
    return request('/movie/now_playing')
}

export function imageUrl(path, size = 'w342'){
    return `${IMAGE_BASE_URL}/${size}${path}`
}