const theme = (state = [], action) => {
  switch (action.type) {
    case 'GET_HOSTS':
      return action.hostList
    default:
      return state
  }
}

export default theme
