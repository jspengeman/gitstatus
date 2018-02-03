import React, { Component } from 'react'
import { getRepoByUser, parseRepoResponse } from './endpoints'
import Maybe from 'folktale/maybe'
import { identity, pick } from 'ramda'

class App extends Component {

  constructor() {
    super()
    this.fetchRepo = this.fetchRepo.bind(this)
  }

  state = { repo: {name: ''} }

  fetchRepo() {
    getRepoByUser('jspengeman', 'gitstatus')
      .then(x => x.map(parseRepoResponse)
                  .getOrElse(''))
      .then(x => this.setState({repo: x}))
  }

  render() {
    return (
      <div>
        <p> Hello, World </p>
        <button onClick={this.fetchRepo}>
          Some text
        </button>
        <p> {JSON.stringify(this.state.repo)} </p>
      </div>
    )
  }
}

export default App
