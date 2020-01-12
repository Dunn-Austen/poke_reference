import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { cacheNames, cacheTypes, handleError, isLoading, storeOpponentTypes, storePokemon } from '../../actions';
import { fetchEmAll } from '../../apiCalls';
// import { fetchEmAll, fetchTypes, fetchTypeData, fetchPokemonData, fetchOpponentTypeData  } from './../../apiCalls';

jest.mock('../../apiCalls.js');

describe('App', () => {
  let wrapper;
  let mockCacheNames;
  let mockCacheTypes;
  let mockHandleError;
  let mockIsLoading;
  let mockStoreOpponentTypes;
  let mockStorePokemon;
  let mockPokeNames;

  beforeEach(() => {
    fetchEmAll.mockImplementation(() => {
      return Promise.resolve([
          {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
          {name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/2/'},
          {name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/3/'}
        ])
    });

    mockCacheNames = jest.fn();
    mockCacheTypes = jest.fn();
    mockHandleError = jest.fn();
    mockIsLoading = jest.fn();
    mockStoreOpponentTypes = jest.fn();
    mockStorePokemon = jest.fn();
    mockPokeNames = [
        {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
        {name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/2/'},
        {name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/3/'}
      ];

    wrapper = shallow(<App
      cacheNames={mockCacheNames}
      cacheTypes={mockCacheTypes}
      handleError={mockHandleError}
      isLoading={mockIsLoading}
      storePokemon={mockStoreOpponentTypes}
      storeOpponentTypes={mockStorePokemon}
      pokeNames={mockPokeNames}
      />)
  });

  it('should match the Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke fetchEmAll on page load', () => {
    expect(fetchEmAll).toHaveBeenCalled()
  });

  describe('mapsStateToProps', () => {
    it('should return only the pertinent information from the redux store', () => {
      const mockState = {
        pokeNames: [{pokemon: 'name', url: 'url'}],
        errorMessage: '',
        isLoading: false,
        pokeTypes: [],
        pokeData: {},
        opponentTypes: [],
      };
      const expected = {
        pokeNames: [{pokemon: 'name', url: 'url'}],
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a cacheNames action when cacheNames is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = cacheNames([{pokemon: 'name', url: 'url'}]);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.cacheNames([{pokemon: 'name', url: 'url'}]);

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with a cacheTypes action when cacheTypes is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = cacheTypes([{name: 'flying', url: 'url'}]);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.cacheTypes([{name: 'flying', url: 'url'}]);

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

    it('calls dispatch with an storePokemon action when storePokemon is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = storePokemon({name: 'pikachu', abilities: []});
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.storePokemon({name: 'pikachu', abilities: []});

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with an storeOpponentTypes action when storeOpponentTypes is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = storeOpponentTypes([{damage_relations: {}}]);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.storeOpponentTypes([{damage_relations: {}}]);

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
})
