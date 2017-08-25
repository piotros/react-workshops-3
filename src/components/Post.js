import React from 'react'
import {Link} from 'react-router-dom'

const Post = props => {
  const {id, title, body} = props.post

  return (
    <div className="post">
      <Link to={`/details/${id}`}><h3>{id}: {title}</h3></Link>
      <p>{body}</p>
    </div>
  )
}

export default Post