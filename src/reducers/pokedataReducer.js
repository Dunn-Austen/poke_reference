export const pokedataReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_POKEDATA':
      return action.pokedata
    default:
      return state;
  }
}
