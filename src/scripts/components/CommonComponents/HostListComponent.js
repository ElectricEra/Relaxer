import React from 'react'
import SmallCardComponent from "./SmallCardComponent";
import { BasicWrapper } from "./BasicWrapperComponent";

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
        <BasicWrapper>
            <input type="text" placeholder="Country"/>
            <SmallCardComponent host={host}/>
            <SmallCardComponent host={host}/>
            <SmallCardComponent host={host}/>
            <SmallCardComponent host={host}/>
        </BasicWrapper>
    )
  }
}

export default HostListComponent
