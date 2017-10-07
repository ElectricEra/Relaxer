const theme = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEWS_TO_STORE':
      return action.data
    default:
      return state
  }
}

export default theme
