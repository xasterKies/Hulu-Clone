import React from 'react'
import './VideoCard.css'

const base_url = "http://image.tmdb.org/t/p/original";

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt=""/>
            <p>{movie.release_date || movie.first_air_date}</p>
            <h2>Movie title</h2>

            <p>Number of likes...</p>
        </div>
    )
}

export default VideoCard
