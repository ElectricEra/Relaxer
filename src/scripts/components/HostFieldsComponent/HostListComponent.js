import React from 'react'
import SmallCardComponent from "../CommonComponents/SmallCardComponent";
import { BasicWrapper } from "../CommonComponents/BasicWrapperComponent";

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
        this.setState({hostList:hostList});
        console.log(this.state.hostList);
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
            <input type="text" placeholder="Country"/>
            {this.renderList()}
        </BasicWrapper>
    )
  }
}

export default HostListComponent