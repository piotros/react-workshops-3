import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Main from './views/Main'
import NotFound from "./views/NotFound"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/details" children={({match}) => {
            return (
              <span>Are you on details? {match ? 'Yes' : 'No' }</span>
            )
          }}/>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/main"/>}/>
            <Route path="/main" component={Main}/>
            <Route path="/details" component={Main}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
