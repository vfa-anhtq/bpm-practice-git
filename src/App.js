import React, { Component } from 'react'
import error from './error.png'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={error} className='App-logo' alt='logo' />
          <p>
            Try again!
          </p>
        </header>
      </div>
    )
  }
}

export default App
