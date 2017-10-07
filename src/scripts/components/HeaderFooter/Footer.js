import React from "react";
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container center-align">
        © 2017 *Here could be your advertisment*
        </div>
      </div>
    </footer>
    )}
};

export default Footer;
