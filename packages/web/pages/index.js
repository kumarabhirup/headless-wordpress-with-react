import React from 'react'
import Head from 'next/head'

import '../sass/index.sass'
import meta from '../src/api/meta'
import HomeComponent from '../src/components/Home'
import WithNavbar from '../src/components/WithNavbar'

export default function HomePage() {
  return (
    <WithNavbar>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <HomeComponent />
    </WithNavbar>
  )
}
