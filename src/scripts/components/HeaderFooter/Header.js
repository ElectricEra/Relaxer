import React from "react";
import { Link } from 'react-router-dom'

import SignInComponent from "../SignIn/SignInComponent";

class Header extends React.Component {
  constructor(props) {
    super(props);
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
		    </div>
		</nav>
    )}
};

export default Header;
