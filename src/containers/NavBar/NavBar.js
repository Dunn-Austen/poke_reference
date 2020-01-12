import React, { Component } from 'react';
import './NavBar.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';


export const NavBar = props => {
  let inputValue;
  const { pokeData, pokeTypes } = props;

  return (
    <header>
      <Switch>
        <Route exact path='/' render={() =>
          <h1 className='welcome-text'>Welcome (PokeReference)</h1>
        }/>
        <Route exact path='/pokepage' render={() =>
          <h1 className='pokemon-name'>{pokeData.name}<span>'s</span> Page</h1>
        }/>
        <Route component={() =>
          <h1 className='unefined-route'>Page Not Found</h1>
        }/>
      </Switch>
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
