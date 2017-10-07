const theme = (state = {}, action) => {
  	console.log("1")
  switch (action.type) {
    case 'ADD_USER_PREFERANCES':
    console.log("2");
      return action.data
    default:
      return state
  }
}

export default theme
