import React, { Component } from 'react';
import './PokePage.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export const PokePage = props => {
  let inputValue;
  const { pokeData, pokeTypes } = props;

  return (
    <div className='poke-page'>
      <section className='pokepage-top'>
        <section className='images-container'>
          {pokeData.sprites.front_default &&
            <img
              className='sprite'
              src={pokeData.sprites.front_default}
              alt={`Front image of ${pokeData.name}`}
            />
          }
          {pokeData.sprites.back_shiny &&
            <img
              className='sprite'
              src={pokeData.sprites.back_shiny}
              alt={`Back image of a shiny ${pokeData.name}`}
            />
          }
          {pokeData.sprites.front_shiny &&
            <img
              className='sprite'
              src={pokeData.sprites.front_shiny}
              alt={`Front image of a shiny ${pokeData.name}`}
            />
          }
          {pokeData.sprites.back_default &&
            <img
              className='sprite'
              src={pokeData.sprites.back_default}
              alt={`Back image of ${pokeData.name}`}
            />
          }
          {!pokeData.sprites.back_default &&
            !pokeData.sprites.front_shiny &&
            !pokeData.sprites.back_shiny &&
            !pokeData.sprites.front_default &&
              <p>
                Ultra-Rare Pokemon: No image available
              </p>
          }
        </section>
      </section>
      <section className='pokepage-middle'>
        <h1>Types Container</h1>
      </section>
      <section className='weak-against'>

      </section>
      <section className='suggested-pokemon'>

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
