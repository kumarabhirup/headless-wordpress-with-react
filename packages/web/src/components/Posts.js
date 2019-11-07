import React from 'react'
import { PropTypes } from 'prop-types'

import PostCard from './PostCard'
import Grid from './Grid'

export default function Posts(props) {
  const { posts, loading, error } = props

  return (
    <>
      <h1>Posts</h1>

      {loading && <h3>Loading...</h3>}

      {error && <h3>Error.</h3>}

      <Grid>
        {posts &&
          posts.map(({ title, excerpt, id, author }) => (
            <PostCard
              title={title.rendered}
              excerpt={excerpt.rendered}
              author={author}
              key={id}
            />
          ))}
      </Grid>
    </>
  )
}

Posts.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
}
