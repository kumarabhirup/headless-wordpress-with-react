import React from 'react'
import { PropTypes } from 'prop-types'
import { Card, Icon } from 'semantic-ui-react'
import ReactHtmlParser from 'react-html-parser'

function PostCard(props) {
  const { title, excerpt, author } = props

  return (
    <article>
      <Card
        image={author.avatar_urls[96]}
        header={title}
        meta={author.description}
        description={ReactHtmlParser(excerpt)}
        extra={
          <>
            <Icon name="user" />
            {author.name}
          </>
        }
      />
    </article>
  )
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    avatar_urls: PropTypes.shape({
      96: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default PostCard
