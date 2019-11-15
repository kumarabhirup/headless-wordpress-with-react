import axios from 'axios'

import meta from '../api/meta'

export default async function wordpressDataAggregator(singlePostData) {
  const authorId = singlePostData.author

  const featuredMediaId =
    singlePostData.featured_media === 0 ? null : singlePostData.featured_media

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
    ...singlePostData,
    author: authorInfo.data,
    featured_media: mediaInfo.data,
  }
}
