import React, { Component } from 'react'
import error from './error.png'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={error} className='App-logo' alt='logo' />
          <p className='errorMsg'>
            Try again!<br />
            You are on branch <span className='branchName'>Develop</span>! <br />
          </p>
          <p className='hint'>
            $ Let's use git checkout to change branch to <span className='branchName'>feature/issue1-contentOfIssue1</span>
          </p>
        </header>
      </div>
    )
  }
}

export default App
