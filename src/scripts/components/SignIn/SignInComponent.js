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

  signIn() {
      console.log('sign in');
    var provider = new firebase.auth.GoogleAuthProvider();

     firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user.displayName);
    });
  }

  signOut() {
      console.log('sign out');
      firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        {!this.state.isLogged ? <p onClick={this.signIn}>Sign In</p> : <p onClick={this.signOut}>Sign Out</p>}
      </div>
    )
  }
}

export default SignInComponent
