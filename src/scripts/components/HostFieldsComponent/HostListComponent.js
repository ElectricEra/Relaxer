import React from 'react'
import SmallCardComponent from "../CommonComponents/SmallCardComponent";
import { BasicWrapper } from "../CommonComponents/BasicWrapperComponent";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getHosts } from '../../actions/index';

let host = {
  "description": 'I will show you best shores of our great location, I know a lot of pubs and bars and I know where are the parties every night!',
  "location": 'Tihuana',
  "price": '200$'
};

class HostListComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getHosts();
  }

  render() {
    return (
        <BasicWrapper>
            <input type="text" placeholder="Country"/>
            {this.props.hosts && this.props.hosts.map(host => <SmallCardComponent host={host} />)}
        </BasicWrapper>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getHosts
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    hosts: state.hosts
  }
}

HostListComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(HostListComponent)

export default HostListComponent
