export const cachePokedata = pokedata => ({
  type: 'CACHE_POKEDATA',
  pokedata
});

export const handleError = errorMessage => ({
  type: 'HANDLE_ERROR',
  errorMessage
})
