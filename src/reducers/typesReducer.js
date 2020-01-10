export const typesReducer = (state = [], action) => {
  switch (action.type) {
    case 'CACHE_TYPES':
      return action.pokeTypes
    default:
      return state
  }
}
