import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapStateToProps } from './NavBar';

describe('NavBar', () => {

  describe('mapsStateToProps', () => {
    it('should return only the pertinent information from the redux store', () => {
      const mockState = {
        pokeNames: [{pokemon: 'dratini', url: 'url'}],
        errorMessage: '',
        isLoading: false,
        pokeTypes: [],
        pokeData: {},
        opponentTypes: [],
      };
      const expected = {
        pokeData: {},
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

})
