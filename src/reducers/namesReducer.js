export const namesReducer = (state = [], action) => {
  switch (action.type) {
    case 'CACHE_NAMES':
      return action.pokeNames
    default:
      return state;
  }
}
