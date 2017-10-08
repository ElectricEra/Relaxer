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


  renderProfileButton() {
    return (!this.props.userData) ? null :
    <li><Link to='/user'>Profile</Link></li>
  }

  render() {
    return (
		<nav>
      {console.log(this.props.userData)}
		    <div className="nav-wrapper">
		        <Link to='/'><span className="brand-logo"><i className="material-icons">beach_access</i></span></Link>
		        <ul id="nav-mobile" className="right hide-on-med-and-down">
		            <li><Link to='/app'>Find a host</Link></li>
		            <li><Link to='/host'>All hosts</Link></li>
		            {
                  this.renderProfileButton()
                }
		            <li><SignInComponent /></li>
		        </ul>

		        <ul id="slide-out" className="side-nav" onClick={$('.button-collapse').sideNav('hide')}>
			        <li><Link to='/'>Relaxer</Link></li>
				    <li><Link to='/app'>Find a host</Link></li>
		            <li><Link to='/host'>All hosts</Link></li>
                {
                  this.renderProfileButton()
                }
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
