import React from 'react'
import meta from '../api/meta'

export default function HomeComponent() {
  return (
    <>
      <h1>{meta.title}</h1>
      <summary>This is the home page.</summary>
    </>
  )
}
