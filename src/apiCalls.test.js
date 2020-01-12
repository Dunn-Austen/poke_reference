import { fetchEmAll, fetchTypes, fetchTypeData, fetchPokemonData, fetchOpponentTypeData } from './apiCalls';

describe('apiCalls', () => {
  describe('fetchEmAll', () => {
    let mockResponse = [
      {name: "bulbasaur", url:"https://pokeapi.co/api/v2/pokemon/1/"},
      {name: "charmander", url:"https://pokeapi.co/api/v2/pokemon/2/"},
      {name: "squirtle", url:"https://pokeapi.co/api/v2/pokemon/3/"},
    ];

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse);
          }
        });
      });
    });
  });
})
