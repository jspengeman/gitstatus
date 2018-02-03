import React, { Component } from 'react'
import {getRepoByUser} from './endpoints'

class App extends Component {
  render() {
    return (
      <div>
        <p> Hello, World </p>
        <button onClick={() => getRepoByUser('jspengeman', 'gitstatus')}/>
      </div>
    )
  }
}

export default App
