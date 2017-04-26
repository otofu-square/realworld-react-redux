import React, { Component } from 'react'
import { createStore } from 'redux'

const defaultState = { checked: false }
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, checked: !state.checked }
    default:
      return state
  }
}
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
            onClick={() => store.dispatch({ checked: true, type: 'TOGGLE'})}
          />
        </div>
        {this.state.checked ? (<h2>Done!</h2>) : null}
      </div>
    )
  }
}

export default App
