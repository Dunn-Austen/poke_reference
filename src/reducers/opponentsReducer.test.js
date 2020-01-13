import { opponentsReducer } from './opponentsReducer';

describe('opponentsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = opponentsReducer([], {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is STORE_OPPONENTS', () => {
    const initialState = [];
    const action = {type: 'STORE_OPPONENTS', opponentTypes: [{damage_relations: {double_damage_from: []}}]};
    const result = opponentsReducer(initialState, action);
    const expectedState = [{damage_relations: {double_damage_from: []}}];

    expect(result).toEqual(expectedState);
  });
});
