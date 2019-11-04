import React from 'react'
import Link from 'next/link'

import '../../sass/index.sass'

export default function Navbar() {
  return (
    <div className="links">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </div>
  )
}
