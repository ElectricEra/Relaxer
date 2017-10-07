import React from 'react'

class SmallCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.sendRequest = this.sendRequest.bind(this);
  }

  componentDidMount(){
    $(document).ready(function(){
      $('.modal').modal();
    });
  }

  sendRequest() {
    console.log("Request sent!");
  }

  render() {
    return (
      <div className="col s12 m12">
          <div className="card horizontal">
            <div className="card-image">
              <img className='card-img responsive-img rlx-host-image' src="http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg"/>
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
              <a className="waves-effect waves-light btn modal-trigger" href='#modal1'>More Details</a>
                <div id="modal1" className="modal modal-fixed-footer">
                  <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                  </div>
                  <div className="modal-footer">
                    <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.sendRequest}>Send request!</a>
                    <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default SmallCardComponent
