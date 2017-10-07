import React from "react";
import { Link } from 'react-router-dom'

import FormComponent from "../CommonComponents/FormComponent";

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
		<nav>
		    <div className="nav-wrapper">
		        <a href="#" className="brand-logo">Logo</a>
		        <ul id="nav-mobile" className="right hide-on-med-and-down">
		            <li><Link to='/host'><span>Sass</span></Link></li>
		            <li><a href="badges.html">Components</a></li>
		            <li><a href="collapsible.html">JavaScript</a></li>
		      </ul>
		    </div>
		</nav>
    )}
};



export default UserSearch;

