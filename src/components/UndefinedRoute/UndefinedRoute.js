import React from 'react';
import { Link } from 'react-router-dom';
import './UndefinedRoute.css';


const UndefinedRoute = () => {
  return (
    <section className='undefined-route'>
      <img
        className='surprised-pikachu'
        src='https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png'
      />
      <Link to ='/'>
        <button className='return-home'>Return Home</button>
      </Link>
    </section>
  )
}

export default UndefinedRoute;
