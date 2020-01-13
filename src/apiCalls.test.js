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

    it('should return an array of pokemon objects', () => {
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

    it('should return an object of pokemon properties', () => {
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

  describe('fetchTypeData', () => {
    let mockResponse = [{damage_relations: {}, id: 15, name: 'ice', pokemon: []}];
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
      const mockArgument = { types: [
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/"
          }
        }
      ]};
      fetchTypeData(mockArgument);
      expect(window.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/type/4/');
    });

    it('should return an object of pokeType data', () => {
      const mockArgument = { types: [
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/"
          }
        }
      ]};
      expect(fetchTypeData(mockArgument)).resolves.toEqual(mockResponse);
    });

    it('should return an error for response that is not ok', () => {
      const mockArgument = { types: [
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/"
          }
        }
      ]};
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchTypeData(mockArgument)).rejects.toEqual(Error('Error with fetchTypeData'));
    });
  });

  describe('fetchOpponentTypeData', () => {
    let mockResponse = [{damage_relations: {}, id: 15, name: 'ice', pokemon: []}];
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
      const mockArgument = [{
        damage_relations: {
          double_damage_from: [
            {
                name: "bug",
                url: "https://pokeapi.co/api/v2/type/7/"
            }
          ]
        }
      }];
      fetchOpponentTypeData(mockArgument);
      expect(window.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/type/7/');
    });

    it('should return an array of pokeType objects', () => {
      const mockArgument = [{
        damage_relations: {
          double_damage_from: [
            {
                name: "bug",
                url: "https://pokeapi.co/api/v2/type/7/"
            },
            {
                name: "ghost",
                url: "https://pokeapi.co/api/v2/type/8/"
            },
            {
                name: "dark",
                url: "https://pokeapi.co/api/v2/type/17/"
            }
          ]
        }
      }];
      expect(fetchOpponentTypeData(mockArgument)).resolves.toEqual(mockResponse);
    });

    it('should return an error for response that is not ok', () => {
      const mockArgument = [{
        damage_relations: {
          double_damage_from: [
            {
                name: "bug",
                url: "https://pokeapi.co/api/v2/type/7/"
            },
            {
                name: "ghost",
                url: "https://pokeapi.co/api/v2/type/8/"
            },
            {
                name: "dark",
                url: "https://pokeapi.co/api/v2/type/17/"
            }
          ]
        }
      }];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
          });
        });
      expect(fetchOpponentTypeData(mockArgument)).rejects.toEqual(Error('Error with fetchOpponentTypeData'));
    });
  });
})
