import React from 'react'

class SmallCardComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col s12 m6">
          <div className="card horizontal">
            <div className="card-image">
              <img className='card-img' src="http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg"/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5>Description:</h5>
                <p>{this.props.host.description}</p>
                <h5>Location:</h5>
                <p>{this.props.host.location}</p>
                <h5>Price:</h5>
                <p>{this.props.host.price}</p>
              </div>
              <div className="card-action">
                <a href="#">More Details</a>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default SmallCardComponent
