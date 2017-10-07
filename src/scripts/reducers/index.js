import { combineReducers } from 'redux'
import theme from './theme'
import hosts from './hosts'
import infoForHosts from './searchParameters'

const reducers = combineReducers({
  theme,
  hosts,
  infoForHosts
})

export default reducers
