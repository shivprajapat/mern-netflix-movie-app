import React from 'react'
import './style.scss';
import { MdArrowBackIos } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';

const Watch = () => {
  
  const location = useLocation();
  const navigate = useNavigate()
  const movie = location.state.movie;

  console.log('movie :>> ', movie);
  return (
    <div className="watch">
      <div className="back" onClick={() => navigate(-1)}>
        <MdArrowBackIos />
        {movie.title}
      </div>
      <video className="video" autoPlay progress={toString()} controls src={movie.video} />
    </div>
  )
}

export default Watch