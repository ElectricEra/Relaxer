import { combineReducers } from 'redux'
import theme from './theme'
import hosts from './hosts'

const reducers = combineReducers({
  theme,
  hosts
})

export default reducers
