import React from 'react'
import SmallCardComponent from "../CommonComponents/SmallCardComponent";
import { BasicWrapper } from "../CommonComponents/BasicWrapperComponent";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Link } from 'react-router-dom'

import { updateStoreWithHosts } from '../../actions/index'

let host = {
  "description": 'I will show you best shores of our great location, I know a lot of pubs and bars and I know where are the parties every night!',
  "location": 'Tihuana',
  "price": '200$'
};

class HostListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hostList: []
    }
  }

  componentDidMount(){
    var hosts = firebase.database().ref('hosts/');
    hosts.on('value', snapshot => {
        var hostList = [];
        for(let host in snapshot.val()) {
            let obj = snapshot.val()[host];
            obj.key = host;
            obj.location = snapshot.val()[host].county;
            hostList.push(obj);
        }
        this.props.updateStoreWithHosts(hostList);
        this.setState({hostList:hostList});
        $(".loading").hide();
    });
  }

  compareArrays(arr1, arr2) {
    for(let i = 0; i<arr1.length; i++) {
      for(let j = 0; j<arr2.length; j++) {
        if(arr1[i] === arr2[j]) return true
      }
    }
    return false;
  }

  renderList() {
      let eventsToShow = [];
      if(!Object.keys(this.props.infoForHosts).length) {
        this.state.hostList.forEach((event, index)=>{
            eventsToShow.push(<SmallCardComponent key={index} host={event}/>)
        });
        return eventsToShow;
      }
      this.state.hostList.forEach((event, index)=>{
        if(
        (event.price < this.props.infoForHosts.price) &&
          (Date.parse(this.props.infoForHosts.dateStart) > Date.parse(event.dates[0])) &&
          (Date.parse(this.props.infoForHosts.dateEnd) < Date.parse(event.dates[1]))
        ) {
          eventsToShow.push(<SmallCardComponent key={index} host={event}/>)
        }
      });
      if(!eventsToShow.length && this.state.hostList.length) {
        return (<BasicWrapper>
          <h3 className="try-again-txt">Nothing found. Please try again</h3>
          <Link to='/app'>
            <button className="waves-effect waves-light blue-background btn center-align try-again-btn">Try again</button>
          </Link>
        </BasicWrapper>)
      } else
      return eventsToShow;
  }

  render() {
    return (
        <BasicWrapper>
          <div className="loading">Loading&#8230;</div>
          {this.renderList()}
        </BasicWrapper>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateStoreWithHosts
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    hosts: state.hosts,
    infoForHosts: state.infoForHosts
  }
}

HostListComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(HostListComponent)

export default HostListComponent
