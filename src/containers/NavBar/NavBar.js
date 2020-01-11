import React, { Component } from 'react';
import './NavBar.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';


export const NavBar = props => {
  let inputValue;
  const { pokeData, pokeTypes } = props;

  return (
    <header>
      <Route exact path='/' render={() =>
        <h1>Welcome (PokeReference)</h1>
      }/>
      <Route exact path='/pokepage' render={() =>
        <h1>{pokeData.name.toUpperCase()}'s Page</h1>
      }/>
    </header>
  )
};

export const mapStateToProps = state => ({
  pokeData: state.pokeData
});

export default connect(mapStateToProps, null)(NavBar);

NavBar.propTypes = {
  pokeData: PropTypes.object
}
