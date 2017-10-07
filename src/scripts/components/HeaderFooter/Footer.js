import React from "react";
import { Link } from 'react-router-dom'

import FormComponent from "../CommonComponents/FormComponent";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
        © 2017 *Here could be your advertisment*
        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
    )}
};

export default Footer;