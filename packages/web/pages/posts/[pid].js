import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'

import '../../sass/index.sass'
import WithNavbar from '../../src/components/WithNavbar'
import Post from '../../src/components/Post'
import meta from '../../src/api/meta'

function PostPage() {
  const router = useRouter()
  const { pid } = router.query

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      setError(null)

      setLoading(true)

      try {
        // Make request for posts.
        const postData = await axios.get(
          `${meta.wordpressBackend}/wp-json/wp/v2/posts/${pid}`
        )

        const authorId = postData.data.author
        const featuredMediaId =
          postData.data.featured_media === 0
            ? null
            : postData.data.featured_media

        const authorInfo = await axios.get(
          `${meta.wordpressBackend}/wp-json/wp/v2/users/${authorId}`
        )

        let mediaInfo
        if (featuredMediaId) {
          mediaInfo = await axios.get(
            `${meta.wordpressBackend}/wp-json/wp/v2/media/${featuredMediaId}`
          )
        } else {
          mediaInfo = 0
        }

        const data = {
          ...postData.data,
          author: authorInfo.data,
          featured_media: mediaInfo.data,
        }

        setPost(data)
      } catch (err) {
        setError(err)
        // throw new Error('Throw some error')
      }

      setLoading(false)
    })()
  }, [pid])

  return (
    <WithNavbar>
      <Head>
        <title>
          {post && post.title.rendered} - {meta.title}
        </title>
      </Head>
      <Post post={post} loading={loading} error={error} />
    </WithNavbar>
  )
}

PostPage.getInitialProps = async () => ({})

export default PostPage
