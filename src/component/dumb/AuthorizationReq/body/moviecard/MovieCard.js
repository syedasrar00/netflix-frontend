import React from 'react'
import './movieCard.css'

export default function MovieCard({ title, poster}) {
  return (
      <div className='movie-card' style={{backgroundImage:`url(${poster})`}}>
        {/* <img src={poster} alt='poster' className='movie-poster' /> */}
      </div>
  )
}
