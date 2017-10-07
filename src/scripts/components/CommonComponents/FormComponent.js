import React from "react";

import InputComponent from "./InputComponent";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            {this.props.children}
          </div>
        </form>
      </div>
    )
  }
};

export default FormComponent;