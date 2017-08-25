import React, {Component} from 'react'
import {customFetch} from '../services/fetch'
import Post from './Post'

class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    customFetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({posts}))
  }

  render() {
    const {posts} = this.state
    const {filter} = this.props

    return (
      <div className="posts">
        <strong>Filter:</strong> {filter}
        {
          posts
            .filter(post => post.title.includes(filter) || post.body.includes(filter))
            .map(post => <Post post={post} key={post.id}/>)
        }
      </div>
    )

  }
}

export default Posts