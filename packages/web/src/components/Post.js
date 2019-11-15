import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'

import { postFallbackImage } from './PostCard'

function Post(props) {
  const { post, loading, error } = props

  return (
    <>
      {loading && <h3>Loading...</h3>}

      {error && <h3>Post not found.</h3>}

      {post && (
        <>
          <img
            src={
              // eslint-disable-next-line camelcase
              (post.featured_media &&
                post.featured_media.media_details.sizes.large.source_url) ||
              postFallbackImage
            }
            alt={post.title.rendered}
            style={{ width: '100%' }}
          />

          <h1>{post.title.rendered}</h1>

          <hr />

          <p>{ReactHtmlParser(post.content.rendered)}</p>
        </>
      )}
    </>
  )
}

Post.propTypes = {
  post: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
}

export default Post
