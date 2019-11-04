import React from 'react'
import { PropTypes } from 'prop-types'
import ReactHtmlParser from 'react-html-parser'

function PostCard(props) {
  const { title, excerpt } = props

  return (
    <article>
      <h2>{title}</h2>

      {/* Maybe you shouldn't do this
      <p dangerouslySetInnerHTML={{ __html: excerpt }} /> */}

      {/* Try this instead */}
      <p>{ReactHtmlParser(excerpt)}</p>
    </article>
  )
}

PostCard.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  // id: PropTypes.number,
}

export default PostCard
