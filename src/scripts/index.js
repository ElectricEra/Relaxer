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
import Header from './components/HeaderFooter/Header'
import Footer from './components/HeaderFooter/Footer'

const $app = document.getElementById('app')

let store = createStore(reducers)

ReactDOM.render(
	<Provider store={store}>
		<Router>
		    <div>
				<Header />
				<Route exact path="/" component={AppContainer} />
				<Route path="/app" component={HostFieldsComponent} />
				<Route path="/host" component={HostFieldsComponent} />
				<Footer />
			</div>
		</Router>
	</Provider>,
	$app
)
