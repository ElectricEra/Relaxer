const theme = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SEARCH_PARAMETERS':
      return action.data
    default:
      return state
  }
}

export default theme
