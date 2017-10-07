import React from 'react'
import SmallCardComponent from "./SmallCardComponent";

let host = {
  "description": 'I will show you best shores of our great location, I know a lot of pubs and bars and I know where are the parties every night!',
  "location": 'Tihuana',
  "price": '200$'
};

class HostListComponent extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
        <div className="col s12 m12">
            <input type="text" placeholder="Country"/>
            <SmallCardComponent host={host}/>
            <SmallCardComponent host={host}/>
            <SmallCardComponent host={host}/>
            <SmallCardComponent host={host}/>
        </div>
    )
  }
}

export default HostListComponent
