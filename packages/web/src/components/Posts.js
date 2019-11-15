import React from 'react'
import PropTypes from 'prop-types'

import PostCard from './PostCard'
import Grid from './Grid'

function Posts(props) {
  const { posts, loading, error } = props

  return (
    <>
      <h1>Posts</h1>

      {loading && <h3>Loading...</h3>}

      {error && <h3>Error.</h3>}

      <Grid>
        {!loading && !error && posts.length < 1 && <h3>No posts found.</h3>}
        {posts &&
          // eslint-disable-next-line camelcase
          posts.map(({ title, excerpt, id, author, featured_media, date }) => (
            <PostCard
              title={title.rendered}
              excerpt={excerpt.rendered}
              author={author}
              image={
                // eslint-disable-next-line camelcase
                featured_media &&
                featured_media.media_details.sizes.large.source_url
              }
              dateTime={date}
              id={id}
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

export default Posts
