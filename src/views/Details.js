import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Post from "../components/Post"
import {connect} from 'react-redux'

class Details extends Component {
  render() {
    const {post, loading} = this.props

    return (
      <div className="details">
        <Link to="/main">Back to main</Link>

        <br/>

        {loading ? 'Loading...' : <Post post={post}/>}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps.match.params
  const {posts} = state.blog

  return {
    post: posts && posts.find(el => el.id === parseInt(id, 10)),
    loading: state.blog.loading
  }
}

export default connect(mapStateToProps)(Details)