export const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_POKEMON':
      return action.pokeData
    default:
      return state
  }
}
