export const fetchEmAll = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=4000')
    .then(response => {
      if (!response.ok) {
        throw Error('Error with catchEmAll get attempt')
      }
      return response.json()
    })
}

//Decide on the size of the fetch. Do I want unique fetches triggered by searches
//using interpolated url strings? Or a massive initial fetch? Let's see the speed implications
