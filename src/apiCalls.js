export const fetchEmAll = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=4000')
    .then(response => {
      if (!response.ok) {
        throw Error('Error with catchEmAll get attempt')
      }
      return response.json()
    })
}

export const fetchTypes = () => {
  return fetch('https://pokeapi.co/api/v2/type')
    .then(response => {
      if (!response.ok) {
        throw Error('Error with fetchTypes')
      }
      return response.json()
    })
}
