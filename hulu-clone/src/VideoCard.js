import React from 'react'
import './VideoCard.css'

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img src="https://miro.medium.com/max/700/1*Wed2L5hgVHz97eBt-EpbPg.jpeg" alt=""/>
            <p>This is a film about coding</p>
            <h2>Movie title</h2>

            <p>Number of likes...</p>
        </div>
    )
}

export default VideoCard
