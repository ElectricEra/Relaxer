import React from "react";

import InputComponent from "../CommonComponents/InputComponent";
import DropdownComponent from "../CommonComponents/DropdownComponent";
import DatePicker from "../CommonComponents/DatePicker";
import ActivitiesComponent from "../CommonComponents/ActivitiesComponent";
import FoodSwitch from "../CommonComponents/FoodSwitch";

import { BasicWrapper } from "../CommonComponents/BasicWrapperComponent";

class UserFormComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row user-form-component">
        <BasicWrapper>
          <InputComponent id="price" type="text" labelText="Price" />
          <DropdownComponent title="Amount of travelers"  id="amountOfPeople" optionList={[1, 2, 3, 4, 5]} classList="input-field col s12" />
          <DatePicker id="date-start" title="Start date"/>
          <DatePicker id="date-end" title="End date"/>
          <ActivitiesComponent activitiesList={["trips", "sport", "art", "parties", "local cuisine"]}/>
        </BasicWrapper>
      </div>
    )
  }
};

export default UserFormComponent;
