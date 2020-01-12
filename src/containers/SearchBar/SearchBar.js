import React, { Component } from 'react';
import './SearchBar.css';
import { fetchPokemonData, fetchTypeData } from '../../apiCalls';
import { storePokemon, cacheTypes, handleError, isLoading } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';


export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      error: '',
    };
  }

  validateInputs = () => {
    const { pokeNames } = this.props;
    const allNames = pokeNames.map(pokemon => {
      return pokemon.name
    });
      if (!allNames.includes(this.state.inputValue)) {
        this.setState({error: 'Pokemon not found / Spelling error'})
      }
  }

  handleClick(inputValue) {
    const { storePokemon, cacheTypes, handleError, isLoading } = this.props;
    this.validateInputs();
    fetchPokemonData(inputValue)
      .then(data => {
        storePokemon(data)
        fetchTypeData(data)
          .then(data => {
            cacheTypes(data)
          })
          .catch(error => {
            console.log('Error with pokeTypes retrieval')
          })
        })
      .catch(error => {
        handleError('Server error. Try again shortly')
      })
  }

  handleInputChange(event) {
    const { handleError } = this.props;
    this.setState({error: ''});
    handleError('');
    this.setState({ inputValue: event.target.value.toLowerCase() });
  }

  render () {
    const { pokeData, errorMessage } = this.props;
    return pokeData.name ? (
        <Redirect to='/pokepage' />
      ) : (
      <section className='search-container'>
        <h1 className='search-prompt'>Find your Foe</h1>
        {this.state.error !== '' &&
          <h1 className='error'>
            {this.state.error}
          </h1>
        }
        {this.state.error === '' &&
          <h1 className='error'>
            {errorMessage}
          </h1>
        }
        <label htmlFor='pokefoe-input'>Pokemon Name</label>
        <input
          id='pokefoe-input'
          type='text'
          placeholder='Mind your spelling'
          onChange={(event) => {this.handleInputChange(event)}}
        />
        <button
          className="search-btn"
          onClick={(event) => {this.handleClick(this.state.inputValue)}}
        >
          Search
        </button>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  pokeData: state.pokeData,
  pokeNames: state.pokeNames,
  errorMessage: state.errorMessage
})

export const mapDispatchToProps = dispatch => ({
  storePokemon: pokeData => dispatch(storePokemon(pokeData)),
  cacheTypes: pokeTypes => dispatch(cacheTypes(pokeTypes)),
  handleError: errorMessage => dispatch(handleError(errorMessage)),
  isLoading: loadingStatus => dispatch(isLoading(loadingStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  pokeData: PropTypes.object,
  storePokemon: PropTypes.func,
  cacheTypes: PropTypes.func,
  handleError: PropTypes.func,
}
