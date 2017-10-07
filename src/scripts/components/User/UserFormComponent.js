import React from "react";

import InputComponent from "../CommonComponents/InputComponent";
import DropdownComponent from "../CommonComponents/DropdownComponent";

class UserFormComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <InputComponent id="price" type="text" labelText="Price" />
            <DropdownComponent id="amountOfPeople" optionList={[1,2,3,4,5]} />
          </div>
        </form>
      </div>
    )
  }
};

export default UserFormComponent;
