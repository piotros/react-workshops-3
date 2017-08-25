import React, {Component} from 'react'
import Search from '../components/Search'
import Posts from '../components/Posts'
import {debounce} from 'lodash'

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
        <Posts filter={filter}/>
      </div>
    )
  }
}

export default Main