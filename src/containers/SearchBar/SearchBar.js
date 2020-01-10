import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchBar.css';
// import { handleError } from '../../actions/index';
import { cacheTypes } from '../../apiCalls';
import PropTypes from 'prop-types';

export const SearchBar = props => {

  return (
    <section className='search-container'>
      <h1 className='search-prompt'>Find your Foe</h1>
      <label htmlFor='pokefoe-input'>Search PokeNemesis</label>
      <input
        id='pokefoe-input'
        type='text'
        placeholder='Email Address'
      />
      <button className="search-btn">
        Search
      </button>
    </section>
  )
}

export default SearchBar;
