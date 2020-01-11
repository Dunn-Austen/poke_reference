import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { fetchEmAll, fetchTypes } from '../../apiCalls'
import { cacheNames, cacheTypes, handleError, isLoading } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar'

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
    return (
      <main>
        <header>Sample text</header>
        <div className='sections-container'>
          <section className='main-left'>
          </section>
          <section className='main-right'>
            <SearchBar />
          </section>
        </div>

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
