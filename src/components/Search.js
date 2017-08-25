import React, {Component} from 'react'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    const value = event.target.value
    const newState = {text: value}

    this.setState(newState)
    this.props.onFilterChange(value);
  }

  render() {
    return (
      <div className="search">
        <input type="text"
               value={this.state.text}
               onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Search