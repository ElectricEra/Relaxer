import { combineReducers } from 'redux'
import theme from './theme'
import hosts from './hosts'
import infoForHosts from './searchParameters'
import userData from './userData'

const reducers = combineReducers({
  theme,
  hosts,
  infoForHosts,
  userData
})

export default reducers
