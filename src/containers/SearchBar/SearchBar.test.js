import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar, mapStateToProps, mapDispatchToProps } from './SearchBar';
import { cacheNames, cacheTypes, handleError, isLoading } from '../../actions';
import { fetchEmAll } from './../../apiCalls';

jest.mock('./../../apiCalls.js');

describe('App', () => {

  describe('mapsStateToProps', () => {
    it('should return only the pertinent information from the redux store', () => {
      const mockState = {
        pokeNames: [{pokemon: 'name', url: 'url'}],
        pokeTypes: [],
        errorMessage: '',
        isLoading: false,
        pokeData: {}
      };
      const expected = {
        pokeData: {},
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
  });
})
