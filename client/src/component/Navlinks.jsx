import React from 'react'
import { Link } from 'react-router-dom'

export default function Navlinks({style, click}) {
  return (
    <div className={`${style}`}>
    <li>
      <Link onClick={click} className={`${location === '/' && 'bg-[#454e80] text-stone-100'} p-1.5`} to='/'>Home</Link>
    </li>
    <li>
      <Link onClick={click} className={`${location === '/about' && 'bg-[#454e80] text-stone-100'} p-1.5`} to='/about'>About</Link>
    </li>
    <li>
      <Link onClick={click} className={`${location === '/project' && 'bg-[#454e80] text-stone-100'} p-1.5`} to='/project'>Project</Link>
    </li>
  </div>
  )
}
