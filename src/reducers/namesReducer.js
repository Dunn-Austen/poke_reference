export const namesReducer = (state = [], action) => {
  switch (action.type) {
    case 'CACHE_NAMES':
      return action.pokedata
    default:
      return state;
  }
}
