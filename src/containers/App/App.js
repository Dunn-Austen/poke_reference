import React, {Component} from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import { fetchEmAll, fetchTypeData, fetchPokemonData, fetchOpponentTypeData } from '../../apiCalls'
import { cacheNames, cacheTypes, handleError, isLoading, storePokemon, storeOpponentTypes } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
import PokePage from '../PokePage/PokePage';
import UndefinedRoute from '../../components/UndefinedRoute/UndefinedRoute';

export class App extends Component {
  componentDidMount() {
    const { cacheNames, cacheTypes } = this.props
    fetchEmAll()
      .then(data => {
        cacheNames(data.results)
      })
      .catch(error => {
        console.log('Error with fetching all names')
      })
  }

  //Return later to extract the sort logic into a util file (remove logic from render)
  render = () => {
    const { pokeNames, storePokemon, cacheTypes, handleError, storeOpponentTypes } = this.props;
    const sortedNames = [...pokeNames].sort((a,b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (b.name > a.name) {
          return 1;
      }
    });
    const allPokemon = sortedNames.map(pokemon => {
      return (
        <a
          className='pokemon-listing'
          onClick={(event) => {
            fetchPokemonData(pokemon.name)
              .then(data => {
                storePokemon(data)
                fetchTypeData(data)
                  .then(data => {
                    cacheTypes(data)
                    fetchOpponentTypeData(data)
                      .then(data => {
                        storeOpponentTypes(data)
                      })
                      .catch(error => {
                        console.log('Error with opponentTypes')
                      })
                  })
                  .catch(error => {
                    console.log('Error with pokeTypes retrieval')
                  })
                })
              .catch(error => {
                handleError('Error with pokeData retrieval')
              })
          }}
        >
          {pokemon.name.toUpperCase()}
        </a>
      )
    });

    return (
      <main>
        <NavBar />
        <Switch>
          <Route exact path='/' render={() =>
            <div className='sections-container'>
              <div className='inner-container'>
                <p className='introductory-text'>
                  Search using one of the methods below (enter or click a name)
                  to learn about how best to counter that pokemon's elemental abilities
                </p>
                <section className='main-top'>
                  <SearchBar />
                </section>
                <section className='main-bottom'>
                  <h1 className='list-title'>All Pokemon</h1>
                  <div className='all-pokemon'>
                    {allPokemon}
                  </div>
                </section>
              </div>
            </div>
            }
          />
          <Route exact path='/pokepage' component={PokePage} />
          <Route component={UndefinedRoute} />
        </Switch>
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
  isLoading: loadingStatus => dispatch(isLoading(loadingStatus)),
  storePokemon: pokeData => dispatch(storePokemon(pokeData)),
  storeOpponentTypes: opponentTypes => dispatch(storeOpponentTypes(opponentTypes))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
App.propTypes = {
  pokeNames:PropTypes.array,
  cacheNames: PropTypes.func,
  cacheTypes: PropTypes.func,
  handleError: PropTypes.func,
  isLoading: PropTypes.func,
  storePokemon: PropTypes.func,
  storeOpponentTypes: PropTypes.func
}
