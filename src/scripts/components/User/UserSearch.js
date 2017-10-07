import React from "react";

import UserFormComponent from "./UserFormComponent";

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col s12">
          <UserFormComponent />
        </div>
    )}
};



export default UserSearch;