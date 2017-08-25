import React, {Component} from 'react'
import Post from './Post'
import {connect} from 'react-redux'
import {getPosts} from "../services/posts"

class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: props.filter
    }

    this.filterTimeout = undefined
  }

  componentDidMount() {
    this.props.getPosts()
  }

  componentWillReceiveProps(nextProps) {
    clearTimeout(this.filterTimeout)
    this.filterTimeout = setTimeout(() => {
      this.setState({filter: nextProps.filter})
    }, 1000)
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
            ?
            posts
              .filter(post => post.title.includes(filter) || post.body.includes(filter))
              .map(post => <Post post={post} key={post.id}/>)
            :
            null
        }
      </div>
    )

  }
}

const mapStatesToProps = state => {
  const {posts, searchVal, loading} = state.blog

  return {
    filter: searchVal,
    loading,
    posts
  }
}

const mapDispatchToProps = {
  getPosts
}

export default connect(mapStatesToProps, mapDispatchToProps)(Posts)