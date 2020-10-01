import React from 'react'
import './VideoCard.css'
import TextTruncate from "react-text-truncate"

const base_url = "http://image.tmdb.org/t/p/original";

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt=""/>
            <TextTruncate
              line={2}
              element="p"
              truncateText="..."
              text={movie.overview}
            />
            <h2>Movie title</h2>

            <p>Number of likes...</p>
        </div>
    )
}

export default VideoCard
