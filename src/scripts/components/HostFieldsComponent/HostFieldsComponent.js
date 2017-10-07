import React from 'react'
import FormComponent from '../CommonComponents/FormComponent'
import DropdownComponent from '../CommonComponents/DropdownComponent'
import DatePicker from '../CommonComponents/DatePicker'
import ActivitiesComponent from '../CommonComponents/ActivitiesComponent'
import FoodSwitch from '../CommonComponents/FoodSwitch'

class HostFieldsComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form>
          <div className="row">
            <DropdownComponent title="Choose number of people you are able to host"  id="select1" optionList={[1, 2, 3, 4, 5]} classList="input-field col s12" />
            <h5>Choose start and end date</h5>
            <DatePicker id="date-start" title="Start date"/>
            <DatePicker id="date-end" title="End date"/>
            <ActivitiesComponent activitiesList={["excursions", "trips", "parties", "local food", "museums"]}/>
            <FoodSwitch title="Do you want to provide some food ?"/>
          </div>
        </form>
      </div>
    )
  }
}

export default HostFieldsComponent
