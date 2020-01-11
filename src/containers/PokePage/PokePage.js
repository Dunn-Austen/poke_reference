import React, { Component } from 'react';
import './PokePage.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export const PokePage = props => {
  let inputValue;
  const { pokeData, pokeTypes } = props;

  return (
    <div className='poke-page'>
      <section className='main-left'>
        <h1>Types Container</h1>
      </section>
      <section className='main-right'>
        <section className='images-container'>
          <img
            className='sprite'
            src={pokeData.sprites.front_default}
            alt={`Image of ${pokeData.name}`}
          />
          <img
            className='sprite'
            src={pokeData.sprites.back_default}
            alt={`Image of ${pokeData.name}`}
          />
          <img
            className='sprite'
            src={pokeData.sprites.front_shiny}
            alt={`Image of a shiny ${pokeData.name}`}
          />
        </section>
        <section className='tactics-container'>
          <div className='weak-against'>


          </div>
          <div className='suggested-pokemon'>


          </div>
        </section>
      </section>
    </div>
  )
}

export const mapStateToProps = state => ({
  pokeData: state.pokeData,
  pokeTypes: state.pokeTypes
})

export default connect(mapStateToProps, null)(PokePage);

PokePage.propTypes = {
  pokeData: PropTypes.object,
  pokeTypes: PropTypes.array
}
