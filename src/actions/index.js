export const cacheNames = pokeNames => ({
  type: 'CACHE_NAMES',
  pokeNames
});

export const cacheTypes = pokeTypes => ({
  type: 'CACHE_TYPES',
  pokeTypes
});

export const handleError = errorMessage => ({
  type: 'HANDLE_ERROR',
  errorMessage
})

export const isLoading = loadingStatus => ({
  type: 'IS_LOADING',
  loadingStatus
})
