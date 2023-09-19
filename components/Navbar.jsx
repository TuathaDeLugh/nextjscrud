import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
        <Link className=" text-white font-bold" href={'/'}>Home</Link>
        <Link className=" bg-white font-bold px-2 py-2 rounded" href={'/projects'}>Add Projects</Link>
    </nav>
  )
}

export default Navbar