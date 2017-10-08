import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { addUserData } from "../../actions/index"

import { Link } from 'react-router-dom'

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLogged: false
    };
  }

  componentDidMount(){
      $('.modal').modal();
      $('#modal1').modal('close');
      if (this.props.userData) {
        $(".loading").show();
      }
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              this.setState({isLogged: true});
          } else {
              this.setState({isLogged: false});
          }
          this.props.addUserData(user);
          $(".loading").hide();
      }.bind(this), function(error) {
        $(".loading").hide();
        $('#error').modal('open');
      })
  }

  signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();

     firebase.auth().signInWithRedirect(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user.displayName);
    });
  }

  signOut() {
      firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        <div id="modal1" className="modal bottom-sheet">
          <div className="modal-content">
            <h4>Login error</h4>
            <p>Try again a bit later</p>
          </div>
          <div className="modal-footer">
            <a className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
        <div className="loading">Loading&#8230;</div>
        {!this.state.isLogged ? <p onClick={this.signIn} className="nav-item">Sign In</p> : <p onClick={this.signOut} className="nav-item">Sign Out</p>}
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

SignInComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInComponent)

export default SignInComponent
