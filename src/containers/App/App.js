import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { fetchEmAll } from '../../apiCalls'
import { cachePokedata, handleError } from '../../actions';
import { connect } from 'react-redux';

export class App extends Component {
  componentDidMount() {
    const { cachePokedata, handleError } = this.props
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
    );
  };
}

export const mapDispatchToProps = dispatch => ({
  cachePokedata: pokeData => dispatch(cachePokedata(pokeData)),
  handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(null, mapDispatchToProps)(App);
