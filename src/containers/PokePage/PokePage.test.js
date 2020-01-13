import React from 'react';
import { shallow } from 'enzyme';
import { PokePage, mapStateToProps } from './PokePage';

describe('PokePage', () => {

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
