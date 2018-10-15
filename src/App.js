import React, { Component } from 'react'
import develop from './develop.png'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={develop} className='App-logo' alt='logo' />
          <p className='errorMsg'>
            Keep moving!<br />
            You are on branch <span className='branchName'>develop</span>! <br />
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
