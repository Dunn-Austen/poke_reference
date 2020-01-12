export const opponentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_OPPONENTS':
      return action.opponentTypes
    default:
      return state
  }
}
