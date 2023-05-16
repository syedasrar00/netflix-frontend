import React, { useState, useEffect } from "react";
import "./row.css";
import MovieCard from "../moviecard/MovieCard";
import axios from "axios";

export default function Row({ genre, url }) {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    try{
        const res = await axios.get('https://api.themoviedb.org/3'+url,{
            params :{
                api_key : 'bdb8f20de3adff2db33bf62809663500'
            }
        });
        setMovies(res.data.results)
    }catch(err){
        console.log(err);
    }
  };
  useEffect(() => {
    fetchMovies();
  })
  
  return (
    <div className="row-wrapper">
      <h2 className="row-genre">{genre}</h2>
      <div className="row-cards-container">
        {movies.map((item) => (
          <MovieCard
            key={item.id}
            title={item.title}
            poster={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
}
