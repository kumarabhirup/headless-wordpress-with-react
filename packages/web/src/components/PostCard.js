import React from 'react'
import PropTypes from 'prop-types'
import { Card, Icon } from 'semantic-ui-react'
import ReactHtmlParser from 'react-html-parser'
import moment from 'moment'

export const postFallbackImage =
  'https://schema.press/wp-content/uploads/edd/2019/01/schema-default-image.png'

function PostCard(props) {
  const { id, title, excerpt, author, image, dateTime } = props

  const publishedAgo = moment(dateTime).fromNow()

  return (
    <article>
      <Card
        image={image || postFallbackImage}
        header={
          <h1>
            <a href={`/posts/${id}`}>{title}</a>
          </h1>
        }
        description={ReactHtmlParser(excerpt)}
        extra={
          <>
            <Icon name="user" />
            {author.name}
            &nbsp;&nbsp;
            <Icon name="time" />
            {publishedAgo}
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
  image: PropTypes.string,
  dateTime: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default PostCard
