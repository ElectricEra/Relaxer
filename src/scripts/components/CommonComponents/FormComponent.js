import React from "react";

import InputComponent from "./InputComponent";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row ">
        <form>
            {this.props.children}
        </form>
      </div>
    )
  }
};

export default FormComponent;
