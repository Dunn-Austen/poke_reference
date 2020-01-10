import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { fetchEmAll } from '../../apiCalls'
import { getPokedata } from '../../actions'

export class App extends Component {
  componentDidMount() {
    const { getPokedata } = this.props
    fetchEmAll()
      .then(data => {

      })
      .catch(error => {
        this.props.handleError('Error with pokedata retrieval')
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

export default App;
