import React, {Component} from 'react'
import Search from '../components/Search'
import Posts from '../components/Posts'
import {debounce} from 'lodash'
import Details from "./Details"
import {Route} from "react-router-dom"

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: ''
    }
  }

  onFilterChange = filter => {
    this.setState({filter})
  }

  render() {
    const {filter} = this.state

    return (
      <div className="main">
        <Search onFilterChange={debounce(this.onFilterChange, 300)}/>
        <div className="main__content" style={{display: 'flex'}}>
          <Posts filter={filter}/>
          <Route exact strict path="/details/:id" component={Details}/>
        </div>
      </div>
    )
  }
}

export default Main