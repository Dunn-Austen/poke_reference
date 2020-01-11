import React, { Component } from 'react';
import './SearchBar.css';
import { fetchPokemonData, fetchTypeData } from '../../apiCalls'
import { storePokemon, cacheTypes, handleError, isLoading } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export const SearchBar = props => {
  let inputValue;
  const { storePokemon, cacheTypes, handleError, isLoading } = props;

  //If the code is too crowded in the JSX, I can consider using some local state error handling
  //and converting this to a class component so that I can test a handleSubmit function where the logic could live

  return (
    <section className='search-container'>
      <h1 className='search-prompt'>Find your Foe</h1>
      <label htmlFor='pokefoe-input'>Pokemon Name</label>
      <input
        id='pokefoe-input'
        type='text'
        placeholder='Mind your spelling'
        onChange={(event) => {
          inputValue = event.target.value.toLowerCase()
          console.log(inputValue)
        }}
      />
      <button
        className="search-btn"
        onClick={(event) => {
          fetchPokemonData(inputValue)
            .then(data => {
              storePokemon(data)
              fetchTypeData(data)
                .then(data => {
                  cacheTypes(data)
                })
                .catch(error => {
                  handleError('Error with pokeTypes retrieval')
                })
              })
            .catch(error => {
              handleError('Error with pokeData retrieval')
            })
        }}
      >
        Search
      </button>
    </section>
  )
}

export const mapStateToProps = state => ({
  pokeData: state.pokeData
})

export const mapDispatchToProps = dispatch => ({
  storePokemon: pokeData => dispatch(storePokemon(pokeData)),
  cacheTypes: pokeTypes => dispatch(cacheTypes(pokeTypes)),
  handleError: errorMessage => dispatch(handleError(errorMessage)),
  isLoading: loadingStatus => dispatch(isLoading(loadingStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  pokeData: PropTypes.object,
  storePokemon: PropTypes.func,
  cacheTypes: PropTypes.func,
  handleError: PropTypes.func,
}
