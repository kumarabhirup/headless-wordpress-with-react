import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'

import '../sass/index.sass'
import meta from '../src/api/meta'
import Posts from '../src/components/Posts'
import WithNavbar from '../src/components/WithNavbar'
import wordpressDataAggregator from '../src/lib/dataAggregator'

function PostsPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      setError(null)

      setLoading(true)

      try {
        // Make request for posts.
        const postsData = await axios.get(
          `${meta.wordpressBackend}/wp-json/wp/v2/posts?per_page=10`
        )

        const data = await Promise.all(
          postsData.data.map(async post => wordpressDataAggregator(post))
        )

        setPosts(data)
      } catch (err) {
        setError(err)
        // throw new Error('Throw some error')
      }

      setLoading(false)
    })()
  }, [])

  return (
    <WithNavbar>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Posts posts={posts} loading={loading} error={error} />
    </WithNavbar>
  )
}

export default PostsPage
