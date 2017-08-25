import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'

import Main from './views/Main'
import Details from "./views/Details"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Redirect to="/main"/>}/>
          <Route exact strict path="/main" component={Main}/>
          <Route exact strict path="/details/:id" component={Details}/>
        </div>
      </Router>
    )
  }
}

export default App
