import React from 'react'

class FoodSwitch extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="row">
        <div className="switch">
          <label>
            {this.props.title}
            <input type="checkbox" id="food-checker"/>
            <span className="lever"></span>
          </label>
        </div>
      </div>
    )
  }
}

export default FoodSwitch
