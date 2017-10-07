import React from "react";
import { Link } from 'react-router-dom'

import FormComponent from "../CommonComponents/FormComponent";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
		<nav>
		    <div className="nav-wrapper">
		        <a href="#" className="brand-logo">Logo</a>
		        <ul id="nav-mobile" className="right hide-on-med-and-down">
		            <li><Link to='/app'>App</Link></li>
		            <li><Link to='/host'>Host</Link></li>
		            <li><Link to='/app'>Sass</Link></li>
		            <li><Link to='/app'>Sass</Link></li>
		            <li><Link to='/app'>Sass</Link></li>
		            <li><Link to='/app'>Sass</Link></li>
		      </ul>
		    </div>
		</nav>
    )}
};

export default Header;
