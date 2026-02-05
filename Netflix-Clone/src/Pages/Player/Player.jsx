import React from 'react'
import './player.css';
// import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { NavLink, useParams } from 'react-router-dom';
import cards_data from '../../assets/cards/Cards_data';
import back_arrow_icon from '../../assets/back_arrow_icon.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const Player = () => {
   const {id} = useParams();
   const trailer_def = "https://www.youtube.com/embed/clXiX3WvP3Q"
    const movie = id!=="0" ?cards_data.find(m=>m.id===Number(id)):null;
  return (
   
    <div className='player'>
      <NavLink to='/'>
       <img src="https://cdn-icons-png.flaticon.com/512/60/60789.png" alt="" /></NavLink>
      <iframe src={id==="0"?trailer_def:movie.trailer} title='trailer' frameborder="0" width="90%" height='90%' allowFullScreen></iframe>
      <div className="player-info">
        <p>{id==="0"?"The Protector":movie.name}</p>
      </div>
    </div>
  )
}

export default Player
