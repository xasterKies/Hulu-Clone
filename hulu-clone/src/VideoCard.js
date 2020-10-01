import React from 'react'
import './VideoCard.css'

const base_url = "http://image.tmdb.org/t/p/original"

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img src={} alt=""/>
            <p>This is a film about coding</p>
            <h2>Movie title</h2>

            <p>Number of likes...</p>
        </div>
    )
}

export default VideoCard
