import React from 'react'

class DropdownComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <a className='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>

        <ul id='dropdown1' className='dropdown-content'>
          <li><a>one</a></li>
          <li><a>two</a></li>
        </ul>
      </div>
    )
  }
}

export default DropdownComponent
