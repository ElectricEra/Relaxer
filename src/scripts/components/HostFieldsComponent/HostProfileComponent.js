import React from 'react'
import { BasicWrapper } from '../CommonComponents/BasicWrapperComponent'

class HostProfileComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  renderRatingStars(rating) {
    if(!rating) {
      return <span>You have no rating</span>
    }
    let stars = [];
    for(let i = 0; i<rating; i++) {
      stars.push(<i className="small material-icons">stars</i>);
    }
    return stars;
  }

  render() {
    var d1 = new Date(this.props.host.dates[0]);
    var d1d = {}
    d1d.year = d1.getFullYear();
    d1d.month = d1.getMonth()+1;
    d1d.date = d1.getDate()+1;
    var d2 = new Date(this.props.host.dates[1]);
    var d2d = {}
    d2d.year = d2.getFullYear();
    d2d.month = d2.getMonth()+1;
    d2d.date = d2.getDate()+1;
    return (
        <div className="host-profile-page">
        <div className="row">
        {console.log(this.props.host)}
          <div className="col l2 m1 s0"></div>
          <div className="col l8 m10 s12">
            <p className="host-profile-page__name">
              <span>{this.props.host.name}</span>
            </p>
            <div className="host-profile-page__img"><img src="http://lorempixel.com/600/300/" alt=""/></div>

            <div className="host-profile-page__rating">
              {this.renderRatingStars(this.props.host.rating)}
            </div>
          </div>
          <div className="col l2 m1 s0"></div>
        </div>
          <div className="row center-align profile-list">
            <p className="">
              <span><b>Gender:</b> {this.props.host.gender}</span>
            </p>
            <p className="">
              <span><b>Country:</b> {this.props.host.county}</span>
            </p>
            <p className="">
              <span><b>E-mail:</b> {this.props.host.email}</span>
            </p>
            <p className="">
              <span><b>Start date:</b> {`${d1d.date}.${d1d.month}.${d1d.year}`}</span>
            </p>
            <p className="">
              <span><b>End date:</b> {`${d2d.date}.${d2d.month}.${d2d.year}`}</span>
            </p>
            <p className="">
              <span><b>Food included:</b> {this.props.host.food ? 'yes' : 'no'}</span>
            </p>
            <p className="">
              <span><b>Price:</b> {this.props.host.price}</span>
            </p>
            <p className="">
              <span><b>Activities:</b> {this.props.host.activities.join(", ")}</span>
            </p>
          </div>
        </div>
    )
  }
}

export default HostProfileComponent
