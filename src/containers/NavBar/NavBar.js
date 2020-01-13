import React, { Component } from 'react';
import './NavBar.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch, Link } from 'react-router-dom';
import { storePokemon } from '../../actions';


export const NavBar = props => {
  const { pokeData, storePokemon } = props;
  const reset = {};

  return (
    <header>
      <Switch>
        <Route exact path='/' render={() =>
          <h1 className='welcome-text'>PokeReference</h1>
        }/>
        <Route exact path='/pokepage' render={() =>
          <div className='nav-container'>
            <Link to ='/'>
              <button className='home' onClick={() => {storePokemon(reset)}}>Return Home</button>
            </Link>
            <h1 className='pokemon-name'>{pokeData.name}</h1>
            <Link to ='/'>
              <button className='home' onClick={() => {storePokemon(reset)}}>Return Home</button>
            </Link>
          </div>
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

export const mapDispatchToProps = dispatch => ({
  storePokemon: pokeData => dispatch(storePokemon(pokeData))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

NavBar.propTypes = {
  pokeData: PropTypes.object
}
