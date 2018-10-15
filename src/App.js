import React, { Component } from 'react'
import success from './success.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={success} className='App-logo' alt='logo' />
          <p>
            {/* TODO: input your name instead of the word 'You' */}
            <span className='congratzName'>Congratz to You!</span><br />
            $ Now, you can easily test features that are developing in the local environment.
          </p>
        </header>
      </div>
    )
  }
}

export default App
