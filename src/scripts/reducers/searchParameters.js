const theme = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER_PREFERANCES':
      return action.data
    default:
      return state
  }
}

export default theme
