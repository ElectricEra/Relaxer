import React from 'react'

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

export default SignInComponent
