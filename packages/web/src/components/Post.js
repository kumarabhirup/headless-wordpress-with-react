import React from 'react'
import PropTypes from 'prop-types'

function Post(props) {
  const { post, loading, error } = props

  return (
    <>
      <h1>Posts</h1>

      {loading && <h3>Loading...</h3>}

      {error && <h3>Post not found.</h3>}

      {post && <h1>{post.title.rendered}</h1>}
    </>
  )
}

Post.propTypes = {
  post: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
}

export default Post
