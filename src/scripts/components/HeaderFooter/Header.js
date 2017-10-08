import React from "react";
import { Link } from 'react-router-dom'

import SignInComponent from "../SignIn/SignInComponent";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  	$(".button-collapse").sideNav();
  }

  render() {
    return (
		<nav>
		    <div className="nav-wrapper">
		        <Link to='/'><span className="brand-logo"><i className="material-icons">beach_access</i></span></Link>
		        <ul id="nav-mobile" className="right hide-on-med-and-down">
		            <li><Link to='/app'>App</Link></li>
		            <li><Link to='/host'>Host</Link></li>
		            <li><Link to='/user'>Profile</Link></li> : <li />
		            <li><SignInComponent /></li>
		        </ul>

		        <ul id="slide-out" className="side-nav" onClick={$('.button-collapse').sideNav('hide')}>
			        <li><Link to='/'>Relaxer</Link></li>
				    <li><Link to='/app'>App</Link></li>
		            <li><Link to='/host'>Host</Link></li>
		            <li><Link to='/user'>Profile</Link></li>
		            <li><a><SignInComponent /></a></li>
				</ul>
				<a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
		    </div>
		</nav>
    )}
};



function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

function mapStateToProps(state) {
  return { userData: state.userData }
}

Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)


export default Header;
