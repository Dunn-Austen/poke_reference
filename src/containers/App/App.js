import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { fetchEmAll } from '../../apiCalls'
import { cachePokedata, handleError, isLoading } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class App extends Component {
  componentDidMount() {
    const { cachePokedata, handleError, isLoading } = this.props
    fetchEmAll()
      .then(data => {
        cachePokedata(data.results)
      })
      .catch(error => {
        handleError('Error with pokedata retrieval')
      })
  }

  render = () => {
    return (
      <main>
        Placeholder
      </main>
    )
  }
}

export const mapStateToProps = state => ({
  pokeData: state.pokeData
})

export const mapDispatchToProps = dispatch => ({
  cachePokedata: pokeData => dispatch(cachePokedata(pokeData)),
  handleError: errorMessage => dispatch(handleError(errorMessage)),
  isLoading: loadingStatus => dispatch(isLoading(loadingStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
App.propTypes = {
  pokeData:PropTypes.array,
  cachePokedata: PropTypes.func,
  handleError: PropTypes.func,
}
