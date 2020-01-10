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
})
