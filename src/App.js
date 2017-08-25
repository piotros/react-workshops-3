import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Main from './views/Main'
import Details from "./views/Details"
import NotFound from "./views/NotFound"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/main"/>}/>
            <Route exact strict path="/main" component={Main}/>
            <Route exact strict path="/details/:id" component={Details}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
