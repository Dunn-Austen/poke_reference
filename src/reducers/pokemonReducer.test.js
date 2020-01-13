import { pokemonReducer } from './pokemonReducer';

describe('pokemonReducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = pokemonReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is STORE_POKEMON', () => {
    const initialState = [];
    const action = {type: 'STORE_POKEMON', pokeData: {abilities: [], name: 'pikachu'}};
    const result = pokemonReducer(initialState, action);
    const expectedState = {abilities: [], name: 'pikachu'};

    expect(result).toEqual(expectedState);
  });
});
