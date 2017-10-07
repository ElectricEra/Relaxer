import '../styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import ReduxThunk from 'redux-thunk'

import promiseMiddleware from 'redux-promise'

import reducers from './reducers'
import AppContainer from './components/AppContainer'
import HostListComponent from './components/HostFieldsComponent/HostListComponent'
import SignInComponent from './components/SignIn/SignInComponent'
import UserSearch from './components/User/UserSearch'
import Header from './components/HeaderFooter/Header'
import Footer from './components/HeaderFooter/Footer'
import Home from  './components/Home/Home'
import HostProfileComponent from  './components/HostFieldsComponent/HostProfileComponent'
import UserProfileComponent from './components/User/UserProfileComponent'

const $app = document.getElementById('app')


const store = createStore(reducers, {}, applyMiddleware(
  ReduxThunk,
))

ReactDOM.render(
	<Provider store={store}>
		<Router>
		    <div>
				<Header />
				<Route exact path="/" component={Home} />
				<Route path="/app" component={UserSearch} />
				<Route path="/host" component={HostListComponent} />
				<Route path="/sign-in" component={SignInComponent} />
                <Route path="/user" component={UserProfileComponent} />
				<Footer />
			</div>
		</Router>
	</Provider>,
	$app
)
