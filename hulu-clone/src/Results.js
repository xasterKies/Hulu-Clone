import React, { useState } from 'react'
import './Results.css'
import VideoCard from './VideoCard'

function Results() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])
    

    return (
        <div className="results">
            {movies.map(movie => {
                <VideoCard/>
            })}
            
            
        </div>
    )
}

export default Results
