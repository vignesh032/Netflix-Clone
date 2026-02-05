import React from 'react'
import './home.css';
import Navbar from '../../Components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png'
import Play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards';
import Footer from '../../Components/Footer/Footer';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="hero">
          <img src={hero_banner} alt="" className='banner_img'/>
          <div className='hero-caption'>
            <img src={hero_title} alt="" className='caption-img'/>
            <p>Discovering his ties to a secret ancient order, a young man 
              living in modern Istanbul embarks on a quest to save the city
              from an immortal enemy
            </p>
            <div className="hero-btns">
              <button className="btn">
                
                <img src={Play_icon} alt="" /><NavLink to={`/player/0`}>Play
                </NavLink></button>
              <button className="btn dark-btn">
                <img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards className="title-cards"/>
          </div>
        </div>
        <div className="more-cards">
          <TitleCards title={"BlockBuster Movies"}/>
          <TitleCards title={"Only on Netflix"}/>
          <TitleCards title={"Upcoming"}/>
          <TitleCards title={"Top  pics for you"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
