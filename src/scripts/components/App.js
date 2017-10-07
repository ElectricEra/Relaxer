import React from 'react'

import { Link } from 'react-router-dom'
import SampleComponent from './SampleComponent'


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
        <h1>This is my app component.</h1>
        <h2>Theme: {this.props.theme}</h2>
        <button onClick={this.toggleTheme.bind(this)}>
          <Link to='/app'>Change the Theme</Link>
        </button>
        <SampleComponent />
      </div>
    )
  }
}

export default App
