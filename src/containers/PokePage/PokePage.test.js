import React from 'react';
import { shallow } from 'enzyme';
import { PokePage, mapStateToProps } from './PokePage';

describe('PokePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PokePage
      pokeData={{
        abilities: [],
        height: 10,
        name: 'gengar',
        types: [],
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
        }
      }}
      pokeTypes={[{damage_relations: {double_damage_from: []}, pokemon: [{pokemon:{name: "abra", url: "https://pokeapi.co/api/v2/pokemon/63/"}}]}]}
      opponentTypes={[{damage_relations: {double_damage_from: []}, pokemon: [{pokemon:{name: "abra", url: "https://pokeapi.co/api/v2/pokemon/63/"}}]}]}
    />);
  });

  it('should match the NavBar Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapsStateToProps', () => {
    it('should return only the pertinent information from the redux store', () => {
      const mockState = {
        pokeNames: [{pokemon: 'raichu', url: 'url'}],
        errorMessage: '',
        isLoading: false,
        pokeTypes: [],
        pokeData: {},
        opponentTypes: [],
      };
      const expected = {
        pokeTypes: [],
        pokeData: {},
        opponentTypes: [],
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

})
