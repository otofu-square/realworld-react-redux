import React, { Component } from 'react'
import { createStore } from 'redux'

import { toggle } from './actions/action'
import reducer from './reducers/reducer'

const store = createStore(reducer)

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentWillMount() {
    store.subscribe(() => this.setState(store.getState()))
  }

  render() {
    return (
      <div className="App">
        <h1>To-dos</h1>
        <div>
          Learn Redux&nbsp;
          <input
            type="checkbox"
            checked={!!this.state.checked}
            onClick={() => store.dispatch(toggle())}
          />
        </div>
        {this.state.checked ? (<h2>Done!</h2>) : null}
      </div>
    )
  }
}

export default App
