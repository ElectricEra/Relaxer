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
      firebase.auth().onAuthStateChanged(function(user) {
          console.log('statechanged')
          if (user) {
              this.setState({isLogged: true});
          } else {
              this.setState({isLogged: false});
          }
          this.props.addUserData(user);
      }.bind(this));
  }

  goToProfile() {

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
