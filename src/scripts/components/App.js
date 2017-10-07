import React from 'react'

import { Link } from 'react-router-dom'
import SampleComponent from './SampleComponent'

import Home from './Home/Home'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  toggleTheme() {
    const newTheme = this.props.theme === 'light' ? 'dark' : 'light'
    this.props.dispatchThemeChange(newTheme)
  }

  render() {
    return (
      <div id='main' className={this.props.theme}>
        <Home props={this.props} />
      </div>
    )
  }
}

export default App
