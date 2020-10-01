import React from 'react'
import './Results.css'
import VideoCard from './VideoCard'

function Result() {
    const [movies, setMovies] = useState([]);
    return (
        <div className="results">
            {movies.map(movie => {
                <VideoCard/>
            })}
            
            
        </div>
    )
}

export default Result
