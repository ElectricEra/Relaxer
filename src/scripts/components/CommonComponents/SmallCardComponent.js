import React from 'react'

import HostProfileCompoment from '../HostFieldsComponent/HostProfileComponent';

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
    var randIndex = Math.floor(Math.random()*60);
    return (
      <div className="col s12 m12">
          <div className="card horizontal">
            <div className="card-image">
              <img className='card-img responsive-img rlx-host-image' src={`https://randomuser.me/api/portraits/${this.props.host.gender === 'male' ? 'men' : 'women'}/${randIndex}.jpg`} />
              <h5 className="small-name">{this.props.host.name}</h5>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5>Activities:</h5>
                <p>{this.props.host.activities.join(", ")}</p>
                <h5>Location:</h5>
                <p>{this.props.host.location}</p>
                <h5>Price:</h5>
                <p>{this.props.host.price}</p>
                <h5>Dates:</h5>
                <p>{`${d1d.date}.${d1d.month}.${d1d.year} - ${d2d.date}.${d2d.month}.${d2d.year}`}</p>
              </div>
              <div className="card-action">
              <a className="waves-effect waves-light btn modal-trigger" href={'#modal'+this.props.host.key}>More Details</a>
                <div id={"modal"+this.props.host.key} className="modal modal-fixed-footer">
                  <div className="modal-content">
                    <HostProfileCompoment host={this.props.host} randIndex={randIndex} />
                  </div>
                  <div className="modal-footer">
                    <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.sendRequest} href={'mailto:' + this.props.host.email}>Send request!</a>
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
