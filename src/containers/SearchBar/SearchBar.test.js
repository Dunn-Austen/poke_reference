import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar, mapStateToProps, mapDispatchToProps } from './SearchBar';
import { cacheNames, cacheTypes, handleError, isLoading, storePokemon, storeOpponentTypes } from '../../actions';
import { fetchPokemonData, fetchTypeData, fetchOpponentTypeData  } from './../../apiCalls';

jest.mock('../../apiCalls.js');

describe('SearchBar', () => {
  let wrapper;
  let mockStorePokemon;
  let mockCacheTypes;
  let mockHandleError;
  let mockIsLoading;
  let mockStoreOpponentTypes;

  beforeEach(() => {
    mockStorePokemon = jest.fn();
    mockCacheTypes = jest.fn();
    mockHandleError = jest.fn();
    mockIsLoading = jest.fn();
    mockStoreOpponentTypes = jest.fn();
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
      storePokemon={mockStorePokemon}
      cacheTypes={mockCacheTypes}
      handleError={mockHandleError}
      isLoading={mockIsLoading}
      storeOpponentTypes={mockStoreOpponentTypes}
      pokeNames={['abra', 'pikachu']}
      errorMessage={'error'}
    />);

    fetchPokemonData.mockImplementation(() => {
      return Promise.resolve({abilities: [], height: 10, name: 'gengar', types: []})
    });

    fetchTypeData.mockImplementation(() => {
      return Promise.resolve([{damage_relations: {}, id: 15, name: 'ice', pokemon: []}])
    });

    fetchOpponentTypeData.mockImplementation(() => {
      return Promise.resolve([{damage_relations: {}, id: 15, name: 'ice', pokemon: []}])
    });

  });

  it('should match the SearchBar Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke handleClick on button click', () => {
    const mockArgument = 'pikachu';
    wrapper.instance().handleClick = jest.fn();
    // wrapper.find('button').simulate('click', mockArgument);
    wrapper.instance().handleClick();

    expect(wrapper.instance().handleClick).toHaveBeenCalled();
  });

  // it('should invoke handleClick on button click', () => {
  //   const mockArgument = 'pikachu';
  //   wrapper.instance().handleClick = jest.fn();
  //   wrapper.find('button').simulate('click', mockArgument);
  //
  //   expect(wrapper.instance().handleClick).toHaveBeenCalledWith(mockArgument);
  // });

  it('should invoke validateInputs when handleClick is called', () => {
    const mockArgument = 'pikachu';
    wrapper.instance().validateInputs = jest.fn();
    wrapper.instance().handleClick(mockArgument);

    expect(wrapper.instance().validateInputs).toHaveBeenCalled();
  });

  it('should setState when validateInputs when the spelling fails to match the names list', () => {
    const initialState = {
      inputValue: '',
      error: ''
    };
    const alteredState = {
      inputValue: '',
      error: 'Pokemon not found / Spelling error'
    };
    wrapper.setState(initialState);
    expect(wrapper.state()).toEqual(initialState);

    wrapper.instance().validateInputs();
    expect(wrapper.state()).toEqual(alteredState);
  });

  it('should setState when handleClick is triggered with a spelling error', () => {
    const initialState = {
      inputValue: '',
      error: ''
    };
    const alteredState = {
      inputValue: '',
      error: 'Pokemon not found / Spelling error'
    };
    wrapper.setState(initialState);
    expect(wrapper.state()).toEqual(initialState);

    wrapper.instance().handleClick();
    expect(wrapper.state()).toEqual(alteredState);
  });

  it('should setState when handleInputChange is triggered', () => {
    const mockEvent = { target: { value: 'zapdos' } };
    const initialState = {
      inputValue: '',
      error: 'error'
    };
    const alteredState = {
      inputValue: 'zapdos',
      error: ''
    };
    wrapper.setState(initialState);
    expect(wrapper.state()).toEqual(initialState);

    wrapper.instance().handleInputChange(mockEvent);
    expect(wrapper.state()).toEqual(alteredState);
  });

  it('should invoke handleError when handleInputChange is called', () => {
    const mockEvent = { target: { value: 'zapdos' } };
    wrapper.instance().handleInputChange(mockEvent);
    expect(mockHandleError).toHaveBeenCalled();
  });

  it('should invoke fetchPokemonData when handleClick is called', () => {
    const mockArgument = 'pikachu';
    wrapper.instance().handleClick(mockArgument);
    expect(fetchPokemonData).toHaveBeenCalledWith(mockArgument);
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
