import React from 'react'
import { PropTypes } from 'prop-types'

import meta from '../api/meta'
import PostCard from './PostCard'

export default function Posts(props) {
  const { posts, loading, error } = props

  return (
    <>
      <h1>{meta.title}</h1>
      <summary>This is the posts page.</summary>

      {loading && <h3>Loading...</h3>}

      {error && <h3>Error.</h3>}

      {posts &&
        posts.map(({ title, excerpt, id }) => (
          <PostCard
            title={title.rendered}
            excerpt={excerpt.rendered}
            key={id}
          />
        ))}
    </>
  )
}

Posts.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.oneOf([PropTypes.null, PropTypes.object]),
}
