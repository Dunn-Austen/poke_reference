import { typesReducer } from './typesReducer';

describe('typesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = typesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is CACHE_TYPES', () => {
    const initialState = [];
    const action = {type: 'CACHE_TYPES', pokeTypes: [{damage_relations: {double_damage_from: []}}]};
    const result = typesReducer(initialState, action);
    const expectedState = [{damage_relations: {double_damage_from: []}}];

    expect(result).toEqual(expectedState);
  });
});
