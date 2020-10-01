import React, { useEffect, useState } from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import axios from  './axios'
import requests from './requests'

function Results( {selectedOption}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption)
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [])
    

    return (
        <div className="results">
            {movies.map((movie) => (
                <VideoCard movie= {movie}/>
            ))}
            
            
        </div>
    )
}

export default Results
