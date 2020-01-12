export const fetchEmAll = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=4000')
    .then(response => {
      if (!response.ok) {
        throw Error('Error with fetchEmAll get attempt')
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
  })
  return Promise.all(promises);
}

export const fetchOpponentTypeData = (pokeTypes) => {
  const opponentTypes = pokeTypes.map(type => {
    return type.damage_relations.double_damage_from
  });
  const combinedTypes = [].concat.apply([], opponentTypes);
  const promises = combinedTypes.map(type => {
    return fetch(type.url)
      .then(response => {
        if (!response.ok) {
          throw Error('Error with fetchOpponentTypeData')
        }
        return response.json()
      })
      .then(data => ({...data}))
  })
  return Promise.all(promises);
}
