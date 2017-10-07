import React from 'react'
import DropdownComponent from '../CommonComponents/DropdownComponent'

class HostFieldsComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        This is host compone
        <DropdownComponent optionList={['Option1', 'Option2', 'Option3']} classList="input-field col s12" />
      </div>
    )
  }
}

export default HostFieldsComponent
