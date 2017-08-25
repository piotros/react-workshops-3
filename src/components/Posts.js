import React, {Component} from 'react'
import {customFetch} from '../services/fetch'
import Post from './Post'
import {connect} from 'react-redux'

class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      posts: []
    }
  }

  componentDidMount() {
    customFetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({posts, loading: false}))
  }

  render() {
    const {posts, loading} = this.state
    const {filter} = this.props

    return (
      <div className="posts">
        {loading ? 'Loading...' : null}

        <br/>

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

const mapStatesToProps = state => {
  return {
    filter: state.blog.searchVal
  }
}

export default connect(mapStatesToProps)(Posts)