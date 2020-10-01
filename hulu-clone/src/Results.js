import React, { useState } from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import axios from  './axios'
import request from './request'

function Results() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(request.
                )
        }

        fetchData();
    }, [])
    

    return (
        <div className="results">
            {movies.map(movie => {
                <VideoCard/>
            })}
            
            
        </div>
    )
}

export default Results
