import React from 'react'

import meta from '../api/meta'

export default function Posts() {
  return (
    <>
      <h1>{meta.title}</h1>
      <summary>This is the posts page.</summary>
    </>
  )
}
