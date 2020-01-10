import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { cachePokedata, handleError, isLoading } from '../../actions';
import { fetchEmAll } from './../../apiCalls';

jest.mock('./../../apiCalls.js');

describe('App', () => {
  let wrapper, mockAddMovies, mockHandleError, mockIsLoading, mockMoviesData;

  describe('mapsStateToProps', () => {
    it('should return only the pertinent information from the redux store', () => {
      const mockState = {
        pokeData: [{pokemon: 'name', url: 'url'}],
        errorMessage: '',
        isLoading: false
      };
      const expected = {
        pokeData: [{pokemon: 'name', url: 'url'}],
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a cachePokedata action when cachePokedata is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = cachePokedata([{pokemon: 'name', url: 'url'}]);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.cachePokedata([{pokemon: 'name', url: 'url'}]);

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
