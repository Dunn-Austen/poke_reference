export const fetchEmAll = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=4000')
    .then(response => {
      if (!response.ok) {
        throw Error('Error with fetchEmAll get attempt')
      }
      return response.json()
    })
}

//A perhaps superfluous code block - candidate for removal
export const fetchTypes = () => {
  return fetch('https://pokeapi.co/api/v2/type')
    .then(response => {
      if (!response.ok) {
        throw Error('Error with fetchTypes')
      }
      return response.json()
    })
}

export const fetchPokemonData = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => {
      if (!response.ok) {
        throw Error('Error with fetchPokemonData')
      }
      return response.json()
    })
}

export const fetchTypeData = (pokeData) => {
  const promises = pokeData.types.map(type => {
    return fetch(type.type.url)
      .then(response => {
        if (!response.ok) {
          throw Error('Error with fetchTypeData')
        }
        return response.json()
      })
      .then(data => ({...data}))
    .catch(error => {
      console.log('Nested fetch failure')
    })
  })
  return Promise.all(promises);
}
