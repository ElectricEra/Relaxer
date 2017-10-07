import React from 'react'

class DropdownComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.select').material_select();
  }

  renderList() {
    return this.props.optionList.map((el, index)=>{
      return <option key={index} value={index}>{el}</option>
    })
  }
  render() {
    return (
      <div>
        <div className={this.props.classList || ''}>
          <select className="select">
            {this.renderList()}
          </select>
          <label>Materialize Select</label>
        </div>
      </div>
    )
  }
}

export default DropdownComponent
