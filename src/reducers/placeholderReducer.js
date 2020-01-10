export const placeholderReducer = (state = false, action) => {
  switch (action.type) {
    case 'HOLD_PLACE':
      return action.placeholder

    default:
      return state;
  };
}
