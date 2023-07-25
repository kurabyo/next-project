import React from 'react'
import Link from 'next/link'
import { Cart } from '.'


export const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href={'/'}>DS Swords</Link>
      </p>
      <Cart/>
    </div>
  )
}
