import { namesReducer } from './namesReducer';

describe('namesReducer', () => {
  it('should return the initial state', () => {
    const expected = true;
    const result = namesReducer(true, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is CACHE_NAMES', () => {
    const initialState = [];
    const action = {type: 'CACHE_NAMES', pokeNames: [{name: 'pikachu', url: 'url'}]};
    const result = namesReducer(initialState, action);
    const expectedState = [{name: 'pikachu', url: 'url'}];

    expect(result).toEqual(expectedState);
  });
});
