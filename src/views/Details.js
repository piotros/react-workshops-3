import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {customFetch} from '../services/fetch'
import Post from "../components/Post"

class Details extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: {},
      loading: true
    }
  }

  componentDidMount() {
    customFetch('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
      .then(response => response.json())
      .then(post => this.setState({post, loading: false}))
  }

  render() {
    const {post, loading} = this.state

    return (
      <div className="details">
        <Link to="/main">Back to main</Link>

        <br/>

        <Post post={post}/>
      </div>
    )
  }
}

export default Details