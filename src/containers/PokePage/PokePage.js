import React, { Component } from 'react';
import './PokePage.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export const PokePage = props => {
  let inputValue;
  const { pokeData, pokeTypes } = props;

  return (
    <section className='poke-page'>
      <div className='sections-container'>
        <section className='main-left'>
        </section>
        <section className='main-right'>

        </section>
      </div>
    </section>
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
