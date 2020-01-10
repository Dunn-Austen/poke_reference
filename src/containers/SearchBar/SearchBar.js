import React, { Component } from 'react';
import './SearchBar.css';
import { fetchPokemonData, fetchTypes } from '../../apiCalls'
import { storePokemon, cacheTypes, handleError, isLoading } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export const SearchBar = props => {
  const { storePokemon, cacheTypes, handleError, isLoading } = props;
  let inputValue;
  
  return (
    <section className='search-container'>
      <h1 className='search-prompt'>Find your Foe</h1>
      <label htmlFor='pokefoe-input'>Pokemon Name</label>
      <input
        id='pokefoe-input'
        type='text'
        placeholder='Mind your spelling'
        onChange={(event) => {
          inputValue = event.target.value
        }}
      />
      <button
        className="search-btn"
        onClick={(event) => {
          storePokemon(inputValue)
        }}
      >
        Search
      </button>
    </section>
  )
}

export const mapDispatchToProps = dispatch => ({
  storePokemon: pokeData => dispatch(storePokemon(pokeData)),
  cacheTypes: pokeTypes => dispatch(cacheTypes(pokeTypes)),
  handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(null, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  storePokemon:PropTypes.func,
  cacheTypes: PropTypes.func,
  handleError: PropTypes.func,
}
