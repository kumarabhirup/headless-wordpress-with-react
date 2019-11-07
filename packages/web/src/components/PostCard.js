import React from 'react'
import { PropTypes } from 'prop-types'
import ReactHtmlParser from 'react-html-parser'

function PostCard(props) {
  const { title, excerpt, author } = props

  return (
    <article>
      <h2>{title}</h2>

      {/* Maybe you shouldn't do this
      <p dangerouslySetInnerHTML={{ __html: excerpt }} /> */}

      {/* Try this instead */}
      <p>{ReactHtmlParser(excerpt)}</p>
      <p>{author.name}</p>
    </article>
  )
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar_urls: PropTypes.shape({
      96: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default PostCard
