import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Home extends React.Component {
	constructor(props) {
    super(props);
    this.showError = this.showError.bind(this);
  }

  componentDidMount() {
    $('.modal').modal();
  }

  componentWillUnmount() {
    $('#123').modal('close');
  }

  showError() {
    if ((this.props.userData && this.props.userData.email) ? '/become-a-host' : '/' === '/') {
      $('#123').modal('open');
    }
  }

  render() {
    var linkRedir = (this.props.userData && this.props.userData.email) ? '/become-a-host' : '/';
  	return (
  		<div className="main-title container">
  			<h1 className="main-title__header">Relaxer</h1>
  			<p className="main-title__descr">Your only choice to find best variants for your trips</p>
  			<ul>
  				<li>Find people which can provide you home</li>
  				<li>Become a hospitable host yourself</li>
  				<li>Share and get experience worldwide</li>
  			</ul>
  			<div className="main-title__buttons">
  				<Link className="waves-effect waves-light blue-background lighten-1 btn" to='/app'>Find hosts</Link>
  				<div onClick={this.showError}>
            <Link className="waves-effect waves-light blue-background lighten-1 btn"  to={linkRedir}>Become a host</Link>
          </div>
  			</div>

        <div id="123" className="modal bottom-sheet">
          <div className="modal-content center-align">
            <h4>You need to log in</h4>
            <h5>To become a host, we encourage you to sign in</h5>
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
    userData: state.userData
  }
}

Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default Home
