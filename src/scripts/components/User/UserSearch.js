import React from "react";

import UserFormComponent from "./UserFormComponent";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Link } from 'react-router-dom'

import { addUserPreferances } from "../../actions/index"

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.addUserPreferances(obj);
  }

  render() {
    return (
        <div className="col s12">
        	<div className="card-panel">
        		<p className="user-find-header center-align">Enter some information</p>
        		<p className="user-find-header center-align">We will find you a trip</p>
        		<UserFormComponent />
            <div className="center-align">
              <Link to='/host'>
              <div className="waves-effect waves-light blue-background btn center-align"
                 onClick={this.handleSubmit}>Find</div>
              </Link>
            </div>
        	</div>
        </div>
    )}
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addUserPreferances
  }, dispatch);
}

function mapStateToProps(state) {
  return { infoForHosts: state.infoForHosts }
}

UserSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch)

export default UserSearch;
