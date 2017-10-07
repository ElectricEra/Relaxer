import '../styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { browserHistory } from 'react-router'

import reducers from './reducers'
import AppContainer from './components/AppContainer'
import HostFieldsComponent from './components/HostFieldsComponent/HostFieldsComponent.js'
import UserSearch from './components/User/UserSearch'


const $app = document.getElementById('app')

let store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
	  <Router>
	    <div>
	      <Route exact path="/" component={AppContainer} />
    	  <Route path="/app" component={AppContainer} />
        <Route path="/host" component={HostFieldsComponent} />
	  	</div>
	  </Router>
  </Provider>,
  $app
)
