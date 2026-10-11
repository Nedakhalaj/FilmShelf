import { useParams } from 'react-router-dom'

function MovieDetailPage(){
     const{ id } = useParams()
    
     return <h1>Movie {id}</h1>
}
export default MovieDetailPage