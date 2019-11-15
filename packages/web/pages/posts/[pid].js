import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Head } from 'next/head'
import { useRouter } from 'next/router'

import '../../sass/index.sass'
import WithNavbar from '../../src/components/WithNavbar'
import Post from '../../src/components/Post'
import meta from '../../src/api/meta'

export default function PostPage() {
  const router = useRouter()
  const { pid } = router.query

  const [post, setPost] = useState([])
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

        const data = await Promise.all(async () => {
          const authorId = postData.author
          const featuredMediaId =
            postData.featured_media === 0 ? null : postData.featured_media

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

          return {
            ...postData,
            author: authorInfo.data,
            featured_media: mediaInfo.data,
          }
        })

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
        <title>{meta.title}</title>
      </Head>
      <Post post={post} loading={loading} error={error} />
    </WithNavbar>
  )
}
