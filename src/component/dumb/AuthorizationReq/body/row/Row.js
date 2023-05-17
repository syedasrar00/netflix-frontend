import React, { useState, useEffect } from "react";
import "./row.css";
import MovieCard from "../moviecard/MovieCard";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export default function Row({ genre, url }) {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
      async function getMovies(){
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
      }
      getMovies();
  },[url])

  const[slideValue, setSlideValue] = useState(0);
  const slideRight = () =>{
    var slider = document.getElementById(genre)
    setSlideValue(slider.scrollLeft+500);
    slider.scrollLeft = slider.scrollLeft+500;
  }
  const slideLeft = () =>{
    var slider = document.getElementById(genre)
    setSlideValue(slider.scrollLeft-500);
    slider.scrollLeft = slider.scrollLeft-500;

  }
  const [leftVisible, setLeftVisible] = useState(true);
  const [rightVisible, setRightVisible] = useState(true);
  useEffect(()=>{
    setLeftVisible(slideValue > 10);
    setRightVisible(slideValue < 3500);
  },[slideValue])
  
  return (
    <div className="row-wrapper">
      <h2 className="row-genre">{genre}</h2>
      <div className="row-cards-container">
      {leftVisible && <MdChevronLeft className="side-icons-left" onClick={slideLeft}/>}
         <div className="row-slider" id={genre}> 
          {movies.map((item) => (
            <MovieCard
              key={item.id}
              title={item.title}
              poster={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
            ></MovieCard>
          ))}
          </div>
         {rightVisible && <MdChevronRight className='side-icons-right' onClick={slideRight}/>}
      </div>
    </div>
  );
}
