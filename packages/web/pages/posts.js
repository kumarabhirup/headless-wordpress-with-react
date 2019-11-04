import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import { PropTypes } from 'prop-types'

import '../sass/index.sass'
import meta from '../src/api/meta'
import Posts from '../src/components/Posts'
import WithNavbar from '../src/components/WithNavbar'

function PostsPage(props) {
  const { posts } = props

  return (
    <WithNavbar>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Posts posts={posts} />
    </WithNavbar>
  )
}

PostsPage.getInitialProps = async () => {
  // Make request for posts.
  const response = await axios.get(
    `${meta.wordpressBackend}/wp-json/wp/v2/posts`
  )

  // Return response to posts object in props.
  return {
    posts: response.data,
  }
}

PostsPage.propTypes = {
  posts: PropTypes.array,
}

export default PostsPage
