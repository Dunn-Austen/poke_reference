import React, { Component } from 'react';
import './PokePage.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export const PokePage = props => {
  const { pokeData, pokeTypes, opponentTypes } = props;
  const allTypes = pokeData.types.map(pokeType => {
    return pokeType.type.name
  });
  const formattedTypes = allTypes.map(type => {
    return (
      <p className='formatted-type' key={type}>
        {type}
      </p>
    )
  });
  const opponentTypeNames = opponentTypes.map(type => {
    return type.name
  })
  // consider removing duplicates here (need unique keys)
  const formattedOpponentTypes = opponentTypeNames.map(name => {
    return (
      <p className='opponent-type' key={name}>
        {name}
      </p>
    )
  });
  const opponents = opponentTypes.map(type => {
    return type.pokemon
  })
  const combinedOpponents = [].concat.apply([], opponents);
  const combinedUniqueOpponents = combinedOpponents.reduce((acc, opponent) => {
    if (!acc.includes(opponent)) {
      acc.push(opponent)
    }
    return acc
  }, []);
  const opponentNames = combinedUniqueOpponents.map(opponent => {
    return opponent.pokemon.name
  });
  const formattedOpponentNames = opponentNames.map(name => {
    return (
      <p className='opponent-name' key={name}>
        {name}
      </p>
    )
  });


  return (
    <div className='poke-page'>
      <div className='inner-page'>
        <section className='pokepage-top'>
          <section className='images-container'>
            {pokeData.sprites.front_default &&
              <img
                className='sprite'
                src={pokeData.sprites.front_default}
                alt={`Front side of ${pokeData.name}`}
              />
            }
            {pokeData.sprites.back_shiny &&
              <img
                className='sprite'
                src={pokeData.sprites.back_shiny}
                alt={`Back side of a shiny ${pokeData.name}`}
              />
            }
            {pokeData.sprites.front_shiny &&
              <img
                className='sprite'
                src={pokeData.sprites.front_shiny}
                alt={`Front side of a shiny ${pokeData.name}`}
              />
            }
            {pokeData.sprites.back_default &&
              <img
                className='sprite'
                src={pokeData.sprites.back_default}
                alt={`Back side of ${pokeData.name}`}
              />
            }
            {!pokeData.sprites.back_default &&
              !pokeData.sprites.front_shiny &&
              !pokeData.sprites.back_shiny &&
              !pokeData.sprites.front_default &&
                <p>
                  Ultra-Rare Pokemon: No image available
                </p>
            }
          </section>
        </section>
        <section className='pokepage-types'>
          {formattedTypes}
        </section>
        <section className='weak-against'>
          {formattedOpponentTypes}
        </section>
        <section className='suggested-pokemon'>
          {formattedOpponentNames}
        </section>
      </div>
    </div>
  )
}

export const mapStateToProps = state => ({
  pokeData: state.pokeData,
  pokeTypes: state.pokeTypes,
  opponentTypes: state.opponentTypes
})

export default connect(mapStateToProps, null)(PokePage);

PokePage.propTypes = {
  pokeData: PropTypes.object,
  pokeTypes: PropTypes.array
}
