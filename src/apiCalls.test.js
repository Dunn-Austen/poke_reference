import { fetchEmAll, fetchTypeData, fetchPokemonData, fetchOpponentTypeData } from './apiCalls';

describe('apiCalls', () => {
  describe('fetchEmAll', () => {
    let mockResponse = [
      {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
      {name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/2/'},
      {name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/3/'},
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

    it('should be passed the correct URL', () => {
      fetchEmAll();
      expect(window.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/?limit=4000');
    });

    it('should return an array of movies', () => {
      expect(fetchEmAll()).resolves.toEqual(mockResponse);
    });

    it('should return an error for response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchEmAll()).rejects.toEqual(Error('Error with fetchEmAll get attempt'));
    });
  });

  describe('fetchPokemonData', () => {
    let mockResponse = {abilities: [], height: 10, name: 'gengar', types: []}

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

    it('should be passed the correct URL', () => {
      fetchPokemonData();
      expect(window.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/undefined');
    });

    it('should return an array of movies', () => {
      expect(fetchPokemonData()).resolves.toEqual(mockResponse);
    });

    it('should return an error for response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchPokemonData()).rejects.toEqual(Error('Error with fetchPokemonData'));
    });
  });


})
