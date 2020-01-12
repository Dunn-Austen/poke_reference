import React, {Component} from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { fetchEmAll, fetchTypes } from '../../apiCalls'
import { cacheNames, cacheTypes, handleError, isLoading } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar'
import NavBar from '../NavBar/NavBar'
import PokePage from '../PokePage/PokePage'

export class App extends Component {
  componentDidMount() {
    const { cacheNames, cacheTypes, handleError, isLoading } = this.props
    fetchEmAll()
      .then(data => {
        cacheNames(data.results)
      })
      .catch(error => {
        handleError('Error with pokeNames retrieval')
      })
  }


  render = () => {
    const { pokeNames } = this.props;
    const allPokemon = pokeNames.map(pokemon => {
      return (
        <a className='pokemon-listing'>
          {pokemon.name.toUpperCase()}
        </a>
      )
    });
    return (
      <main>
        <NavBar />
        <Route exact path='/' render={() =>
          <div className='sections-container'>
            <section className='main-left'>
              <h1>All Pokemon</h1>
              <div className='all-pokemon'>
                {allPokemon}
              </div>
            </section>
            <section className='main-right'>
              <SearchBar />
            </section>
          </div>
          }
        />
        <Route exact path='/pokepage' component={PokePage} />
      </main>
    )
  }
}

export const mapStateToProps = state => ({
  pokeNames: state.pokeNames
})

export const mapDispatchToProps = dispatch => ({
  cacheNames: pokeNames => dispatch(cacheNames(pokeNames)),
  cacheTypes: pokeTypes => dispatch(cacheTypes(pokeTypes)),
  handleError: errorMessage => dispatch(handleError(errorMessage)),
  isLoading: loadingStatus => dispatch(isLoading(loadingStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
App.propTypes = {
  pokeNames:PropTypes.array,
  cacheNames: PropTypes.func,
  cacheTypes: PropTypes.func,
  handleError: PropTypes.func,
  isLoading: PropTypes.func,
}
