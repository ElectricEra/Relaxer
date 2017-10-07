import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
	constructor(props) {
    super(props)
  }

  render() {
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
  				<Link className="waves-effect waves-light red lighten-1 btn" to='/app'>Find hosts</Link>
  				<Link className="waves-effect waves-light red lighten-1 btn" to='/host'>Become a host</Link>
  			</div>
  		</div>
  	)
  }
}