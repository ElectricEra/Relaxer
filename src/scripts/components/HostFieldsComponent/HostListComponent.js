import React from 'react'
import SmallCardComponent from "../CommonComponents/SmallCardComponent";
import { BasicWrapper } from "../CommonComponents/BasicWrapperComponent";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

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
    });
  }

  renderList() {
      return this.state.hostList.map((el, index)=>{
          return <SmallCardComponent host={el}/>
      })
  }

  render() {
    return (
        <BasicWrapper>
        {console.log(this.state.hostList, this.props)}
            <input type="text" placeholder="Country"/>
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