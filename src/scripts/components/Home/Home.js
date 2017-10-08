import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
	constructor(props) {
    super(props)
  }

  render() {
  	return (
  		<div className="main-title container">
		{console.log('this user:  ',firebase.auth().currentUser)}
  			<h1 className="main-title__header">Relaxer</h1>
  			<p className="main-title__descr">Your only choice to find best variants for your trips</p>
  			<div className="row">
  				<div className="col l4 m6 s12">
						<div>
							<i className="large material-icons">local_hotel</i>
						</div>
						<span className="ico-text-home">Find people which can provide you home</span>
					</div>
  				<div className="col l4 m6 s12">
						<div>
							<i className="large material-icons">transfer_within_a_station</i>
						</div>
						<span className="ico-text-home">Become a hospitable host yourself</span>
					</div>
  				<div className="col l4 m12 s12">
						<div>
							<i className="large material-icons">public</i>
						</div>
						<span className="ico-text-home">Share and get experience worldwide</span>
					</div>
  			</div>
  			<div className="main-title__buttons">
  				<Link className="waves-effect waves-light blue-background lighten-1 btn" to='/app'>Find hosts</Link>
  				<Link className="waves-effect waves-light blue-background lighten-1 btn" to='/become-a-host'>Become a host</Link>
  			</div>
  		</div>
  	)
  }
}
