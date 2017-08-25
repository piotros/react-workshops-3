import React, {Component} from 'react'
import {customFetch} from '../services/fetch'
import Post from './Post'
import {connect} from 'react-redux'
import {setLoading, storePosts} from "../store/data/blog/actions"

class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: props.filter
    }

    this.filterTimeout = undefined;
  }

  componentDidMount() {
    this.props.setLoading(true)

    customFetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        this.props.setLoading(false)
        this.props.storePosts(posts)
      })
  }

  componentWillReceiveProps(nextProps) {
    clearTimeout(this.filterTimeout)
    this.filterTimeout = setTimeout(() => {
      this.setState({filter: nextProps.filter});
    }, 1000);
  }

  render() {
    const {filter} = this.state
    const {posts, loading} = this.props

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
    filter: state.blog.searchVal,
    loading: state.blog.loading,
    posts: state.blog.posts
  }
}

const mapDispatchToProps = {
  storePosts,
  setLoading
}

export default connect(mapStatesToProps, mapDispatchToProps)(Posts)