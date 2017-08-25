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
      .then(posts => {
        this.setState({posts})
      })
  }

  render() {
    return (
      <div className="posts">
        {this.state.posts.map(post => <Post post={post} key={post.id}/>)}
      </div>
    )

  }
}

export default Posts