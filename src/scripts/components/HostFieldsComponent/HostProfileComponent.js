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
    return (
      <BasicWrapper>
        <div className="host-profile-page">
          <img className="host-profile-page__img" src="http://lorempixel.com/600/300/" alt=""/>
          <p className="host-profile-page__name">
            <span>John </span>
            <span>Doe</span>
          </p>
          <div className="host-profile-page__rating">
            {this.renderRatingStars(3)}
          </div>

          <div className="row">
            <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="http://lorempixel.com/600/300/" />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
          </div>



        </div>
      </BasicWrapper>
    )
  }
}

export default HostProfileComponent
