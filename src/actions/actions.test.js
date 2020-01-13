import * as actions from '../actions';

describe('actions', () => {
  it ('should have a type of CACHE_NAMES', () => {
    const pokemon = [
      {
        name: 'bulbasaur',
        url: 'url'
      },
      {
        name: 'pikachu',
        url: 'url'
      }
    ];
    const expectedAction = {
      type: 'CACHE_NAMES',
      pokeNames: [
        {
          name: 'bulbasaur',
          url: 'url'
        },
        {
          name: 'pikachu',
          url: 'url'
        }
      ]
    }

    const result = actions.cacheNames(pokemon);

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of CACHE_TYPES', () => {
    const types = [
        {damage_relations: [], name: 'name'}
      ];
    const expectedAction = {
      type: 'CACHE_TYPES',
      pokeTypes: [
          {damage_relations: [], name: 'name'}
        ]
    };

    const result = actions.cacheTypes(types);

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of HANDLE_ERROR', () => {
    const errorMessage = 'placeholder';
    const expectedAction = {
      type: 'HANDLE_ERROR',
      errorMessage: 'placeholder'
    };

    const result = actions.handleError(errorMessage);

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of IS_LOADING', () => {
    const loadingStatus = true;
    const expectedAction = {
      type: 'IS_LOADING',
      loadingStatus: true
    };

    const result = actions.isLoading(loadingStatus);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of STORE_POKEMON', () => {
    const pokeData = {
      abilities: [],
      name: 'pikachu'
    };
    const expectedAction = {
      type: 'STORE_POKEMON',
      pokeData: {
        abilities: [],
        name: 'pikachu'
      }
    };

    const result = actions.storePokemon(pokeData);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of STORE_OPPONENTS', () => {
    const opponentTypes = [
        {damage_relations: [], name: 'name'}
      ];
    const expectedAction = {
      type: 'STORE_OPPONENTS',
      opponentTypes: [
          {damage_relations: [], name: 'name'}
        ]
    };

    const result = actions.storeOpponentTypes(opponentTypes);

    expect(result).toEqual(expectedAction);
  });
})
