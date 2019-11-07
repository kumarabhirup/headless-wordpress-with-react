import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div
      className="links"
      style={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </div>
  )
}
