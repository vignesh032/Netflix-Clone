import React, { useEffect, useRef } from 'react'
import './titlecards.css';
import cards_data from '../../assets/cards/Cards_data'
import { NavLink } from 'react-router-dom';


const TitleCards = ({title,category}) => {
  const cardsRef=useRef(null);

  useEffect(()=>{
    cardsRef.current.addEventListener("wheel",handleWheel)
  },[])
  const handleWheel = (event)=>{
      event.preventDefault();
      cardsRef.current.scrollLeft+=event.deltaY;
    }
  return (
    <div className='titlecards'>
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
            {cards_data.map((card,index)=>{
              return <NavLink key={card.id} to={`/player/${card.id}`}>
              <div className="card" key={index}>
                <img src={card.image} alt="" />
                <p>{card.name}</p>
              </div>
              </NavLink>
            })}
        </div>
    </div>
  )
}

export default TitleCards
