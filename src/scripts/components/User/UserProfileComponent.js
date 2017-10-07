import React from "react";

import InputComponent from "../CommonComponents/InputComponent";
import DropdownComponent from "../CommonComponents/DropdownComponent";
import DatePicker from "../CommonComponents/DatePicker";
import ActivitiesComponent from "../CommonComponents/ActivitiesComponent";
import FoodSwitch from "../CommonComponents/FoodSwitch";

import { BasicWrapper } from "../CommonComponents/BasicWrapperComponent";

class UserFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        photoURL: firebase.auth().currentUser ? firebase.auth().currentUser.photoURL : ''
    }
  }

  saveHandler() {

  }

  render() {
    return (
      <div className="row user-form-component">
        <BasicWrapper>
        <div className="card-panel">
            <img src={this.state.photoURL}/>
            <InputComponent id="f-name" type="text" labelText="First Name" />
            <InputComponent id="l-name" type="text" labelText="First Name" />
            <DatePicker id="bd" title="Birth Date" />
            <div className="center-align">
              <div className="waves-effect waves-light blue-background btn center-align"
                 onClick={this.saveHandler}>Save</div>
            </div>
        </div>
        </BasicWrapper>
      </div>
    )
  }
};

export default UserFormComponent;
