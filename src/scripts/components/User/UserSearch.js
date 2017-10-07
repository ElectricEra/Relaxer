import React from "react";

import UserFormComponent from "./UserFormComponent";

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col s12">
        	<div className="card-panel">
        		<p className="user-find-header center-align">Enter some information</p>
        		<p className="user-find-header center-align">We will find you a trip</p>
        		<UserFormComponent />
        	</div>
        </div>
    )}
};

export default UserSearch;
