import React, {Component} from 'react'
import {connect} from 'react-redux'
import {search} from '../store/data/blog/actions'

class Search extends Component {
  handleChange = event => {
    const value = event.target.value

    this.props.search(value);
    this.props.onFilterChange(value);
  }

  render() {
    return (
      <div className="search">
        <input type="text"
               value={this.props.value}
               onChange={this.handleChange}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.blog.searchVal
  }
}

const mapDispatchToProps = {
  search
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)