import React from "react";

import InputComponent from "../CommonComponents/InputComponent";

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col s12">
          <div id='form'>
            <InputComponent id='123' type="text" placeholder="Text1"/>

            <InputComponent id='124' type="text" placeholder="Text1"/>

            <InputComponent id='125' type="text" placeholder="Text1"/>

            <InputComponent id='126' type="text" placeholder="Text1"/>
          </div>
        </div>
    )}
};



export default UserSearch;