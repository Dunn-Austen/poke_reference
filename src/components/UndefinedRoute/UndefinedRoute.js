import React from 'react';
import { Link } from 'react-router-dom';
import './UndefinedRoute.css';

const UndefinedRoute = () => {
  return (
    <section className='undefined-route'>
      <img
        className='surprised-pikachu'
        src='https://i.kym-cdn.com/photos/images/original/001/431/201/40f.png'
        alt='iconic surprised pikachu face'
      />
      <Link to ='/'>
        <button className='return-home'>Return Home</button>
      </Link>
    </section>
  )
}

export default UndefinedRoute;
