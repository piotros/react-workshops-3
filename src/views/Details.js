import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Post from '../components/Post'
import {connect} from 'react-redux'
import {getPosts} from '../services/posts'
import PostEditForm from '../components/PostEditForm'

class Details extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  onSubmit(values) {
    console.log('submitted', values)
  }

  onSubmitFail(values) {
    console.log('fail', values)
  }

  render() {
    const {post, loading} = this.props

    const postComponent = post ? <Post post={post}/> : null

    return (
      <div className="details">
        <Link to="/main">Back to main</Link>

        <br/>

        <PostEditForm onSubmit={this.onSubmit} onSubmitFail={this.onSubmitFail}/>

        <br/>

        {loading ? 'Loading...' : postComponent}
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

const mapDispatchToProps = {
  getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)