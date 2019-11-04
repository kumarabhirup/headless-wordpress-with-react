import React from 'react'
import Head from 'next/head'

import '../sass/index.sass'
import meta from '../src/api/meta'
import Posts from '../src/components/Posts'
import WithNavbar from '../src/components/WithNavbar'

export default function PostsPage() {
  return (
    <WithNavbar>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Posts />
    </WithNavbar>
  )
}
