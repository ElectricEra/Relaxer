import React from "react";

import InputComponent from "../CommonComponents/InputComponent";
import DropdownComponent from "../CommonComponents/DropdownComponent";
import DatePicker from "../CommonComponents/DatePicker";
import ActivitiesComponent from "../CommonComponents/ActivitiesComponent";
import FoodSwitch from "../CommonComponents/FoodSwitch";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { addUserData } from "../../actions/index"

import { BasicWrapper } from "../CommonComponents/BasicWrapperComponent";

class UserProfileComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  saveHandler() {
    console.log("Saved!");
  }

  render() {
    let photoURL = this.props.userData ? this.props.userData.photoURL : '';
    let name = this.props.userData ? this.props.userData.displayName : '';
    let email = this.props.userData ? this.props.userData.email : '';
    return (
      <div className="row user-form-component">
        <BasicWrapper>
        <div className="card-panel center-align">
            <img src={photoURL} className="responsive-img"/>
            <h5>{name}</h5>
            <h5>{email}</h5>
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
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addUserData
  }, dispatch);
}

function mapStateToProps(state) {
  return { userData: state.userData }
}

UserProfileComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileComponent)

export default UserProfileComponent;
