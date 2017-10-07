import React from "react";
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
		<nav>
		    <div className="nav-wrapper">
		        <Link to='/'><span className="brand-logo">Logo</span></Link>
		        <ul id="nav-mobile" className="right hide-on-med-and-down">
		            <li><Link to='/app'>App</Link></li>
		            <li><Link to='/host'>Host</Link></li>
		            <li><Link to='/sign-in'>Sign in</Link></li>
		      </ul>
		    </div>
		</nav>
    )}
};

export default Header;
