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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var hosts = firebase.database().ref('hosts/');
    $('.modal').modal();
  }

  handleSubmit() {
    console.log(this.props.userData);
    var a = new Date($('#date-start').val())
    var b = new Date($('#date-end').val())
    var switcher = true;
    var dates = [];
    if (a == 'Invalid Date' || b == 'Invalid Date') {
      switcher = false;
    } else {
      dates = [a.toISOString(), b.toISOString()]
    }
    var obj = {
      price: $('#price').val(),
      living: +$('#amountOfPeople').val() + 1,
      dates,
      activities: [
        $('#filled-in-box0').prop('checked') ? 'trips' : undefined,
        $('#filled-in-box1').prop('checked') ? 'sport' : undefined,
        $('#filled-in-box2').prop('checked') ? 'art' : undefined,
        $('#filled-in-box3').prop('checked') ? 'parties' : undefined,
        $('#filled-in-box4').prop('checked') ? 'local cuisine' : undefined
      ].filter(a=>!!a),
      gender: $('#gender').val() === 0 ? 'male' : 'female',
      county: $('#country').val(),
      email: this.props.userData.email,
      name: this.props.userData.displayName,
      food:$('#food-checker').prop('checked'),
      rating: 3,
      picture: this.props.userData.photoURL
    }
    var hosts = firebase.database().ref('hosts/');
    switcher ? hosts.push(obj) : null;
}

  render() {
    return (
      <div className="col s12">
        <div className="card-panel">
          <p className="user-find-header center-align">Enter some information</p>
          <p className="user-find-header center-align">We will register you as a travel host</p>
          <div className="row user-form-component">
            <BasicWrapper>
              <DropdownComponent title="Amount of travelers you can host"  id="amountOfPeople" optionList={[1, 2, 3, 4, 5]} classList="input-field col s12" />
              <DatePicker id="date-start" title="Start date"/>
              <DatePicker id="date-end" title="End date"/>
              <InputComponent id="price" type="text" labelText="Your price" />
              <ActivitiesComponent activitiesList={["trips", "sport", "art", "parties", "local cuisine"]}/>
              <DropdownComponent title="Your gender"  id="gender" optionList={['male', 'female']} classList="input-field col s12" />
              <InputComponent id="country" type="text" labelText="Your country" />
              <FoodSwitch title='Food included?' />
            </BasicWrapper>
          </div>
          <div className="center-align">
            <a className="waves-effect waves-light blue-background btn center-align modal-trigger"
               onClick={this.handleSubmit} href="#modal1">Register</a>
          </div>
          <div id="modal1" className="modal">
            <div className="modal-content center-align">
              <h4>Thanks for becoming a host</h4>
              <p>We hope you will have a great time!</p>
            </div>
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
    hosts: state.hosts,
    userData: state.userData
  }
}

AddHostComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHostComponent)

export default AddHostComponent
