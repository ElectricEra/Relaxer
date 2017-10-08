import React from 'react'
import SmallCardComponent from "../CommonComponents/SmallCardComponent";
import { BasicWrapper } from "../CommonComponents/BasicWrapperComponent";

import InputComponent from "../CommonComponents/InputComponent";
import DropdownComponent from "../CommonComponents/DropdownComponent";
import DatePicker from "../CommonComponents/DatePicker";
import ActivitiesComponent from "../CommonComponents/ActivitiesComponent";
import FoodSwitch from "../CommonComponents/FoodSwitch";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Link } from 'react-router-dom'

import { updateStoreWithHosts } from '../../actions/index'

class AddHostComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var hosts = firebase.database().ref('hosts/');
  }

  handleSubmit() {
    var obj = {
      price: $('#price').val(),
      amountOfPeople: +$('#amountOfPeople').val() + 1,
      dateStart: $('#date-start').val(), 
      dateEnd: $('#date-end').val(),
      filled: [
        $('#filled-in-box0').prop('checked') ? 'trips' : undefined,
        $('#filled-in-box1').prop('checked') ? 'sport' : undefined,
        $('#filled-in-box2').prop('checked') ? 'art' : undefined,
        $('#filled-in-box3').prop('checked') ? 'parties' : undefined,
        $('#filled-in-box4').prop('checked') ? 'local cuisine' : undefined
      ]
    }
    console.log(obj);
  }

  render() {
    return (
      <div className="col s12">
        <div className="card-panel">
          <p className="user-find-header center-align">Enter some information</p>
          <p className="user-find-header center-align">We will register you as a travel host</p>
          <div className="row user-form-component">
            <BasicWrapper>
              <InputComponent id="price" type="text" labelText="How much do you want for your trip?" />
              <DropdownComponent title="Amount of travelers you can host"  id="amountOfPeople" optionList={[1, 2, 3, 4, 5]} classList="input-field col s12" />
              <DatePicker id="date-start" title="Start date"/>
              <DatePicker id="date-end" title="End date"/>
              <ActivitiesComponent activitiesList={["trips", "sport", "art", "parties", "local cuisine"]}/>
              <DropdownComponent title="Your gender"  id="gender" optionList={['male', 'female']} classList="input-field col s12" />
              <InputComponent id="country" type="text" labelText="Your country" />
              <InputComponent id="email" type="text" labelText="Your e-mail" />
              <FoodSwitch title='Food included?' />
            </BasicWrapper>
          </div>
          <div className="center-align">
            <div className="waves-effect waves-light blue-background btn center-align"
               onClick={this.handleSubmit}>Find</div>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    hosts: state.hosts
  }
}

AddHostComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHostComponent)

export default AddHostComponent
