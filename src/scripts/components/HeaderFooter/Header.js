import React from "react";
import { Link } from 'react-router-dom'

import SignInComponent from "../SignIn/SignInComponent";

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
		        <ul id="nav-mobile" className="right hide-on-small-only">
		            <li><Link to='/app'>App</Link></li>
		            <li><Link to='/host'>Host</Link></li>
		            <li><SignInComponent /></li>
		        </ul>

		        <ul id="slide-out" className="side-nav">
		        <li>
		        	<div class="user-view">
						<li className="relaxer-text"><Link to='/'>Relaxer</Link></li>
				    </div>
			    </li>
				    <li><Link to='/app'>App</Link></li>
		            <li><Link to='/host'>Host</Link></li>
		            <li><a><SignInComponent /></a></li>
				</ul>
				<a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
		    </div>
		</nav>
    )}
};

export default Header;
