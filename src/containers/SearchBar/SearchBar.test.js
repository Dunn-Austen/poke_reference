import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar, mapStateToProps, mapDispatchToProps } from './SearchBar';
import { cacheNames, cacheTypes, handleError, isLoading, storePokemon, storeOpponentTypes } from '../../actions';
import { fetchPokemonData, fetchTypeData, fetchOpponentTypeData  } from './../../apiCalls';

jest.mock('../../apiCalls.js');

describe('SearchBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBar
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
      storePokemon={jest.fn()}
      cacheTypes={jest.fn()}
      handleError={jest.fn()}
      isLoading={jest.fn()}
      storeOpponentTypes={jest.fn()}
      pokeNames={['abra', 'pikachu']}
      errorMessage={'error'}
    />);
  });

  it('should match the SearchBar Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapsStateToProps', () => {
    it('should return only the pertinent information from the redux store', () => {
      const mockState = {
        pokeNames: [{pokemon: 'alakazam', url: 'url'}],
        pokeTypes: [],
        errorMessage: '',
        isLoading: false,
        pokeData: {}
      };
      const expected = {
        pokeData: {},
        pokeNames: [{pokemon: 'alakazam', url: 'url'}],
        errorMessage: '',
        pokeTypes: []
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a cacheTypes action when cacheNames is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = cacheTypes([{name: 'poison'}]);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.cacheTypes([{name: 'poison'}]);

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with a storePokemon action when storePokemon is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = storePokemon([{name: 'pikachu'}]);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.storePokemon([{name: 'pikachu'}]);

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with a handleError action when handleError is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = handleError('error');
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.handleError('error');

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with an isLoading action when isLoading is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = isLoading(false);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.isLoading(false);

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with an storeOpponentTypes action when storeOpponentTypes is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = storeOpponentTypes([{type: {name: 'poison'}}, {}]);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.storeOpponentTypes([{type: {name: 'poison'}}, {}]);

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
})
