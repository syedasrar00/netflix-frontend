import React, { useEffect, useState } from 'react'
import './movieList.css'
import axios from 'axios'

export default function MovieList() {
    const[movies, setMovies] = useState([])
    const getMovies = async ()=>{
        const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated',{
            params :{
                api_key : 'bdb8f20de3adff2db33bf62809663500'
            }
        });
        setMovies(res.data.results);
    }
    useEffect(() => {
        getMovies()
    }, [])
    
    return (
    <div>{movies.toString()}</div>
  )
}
