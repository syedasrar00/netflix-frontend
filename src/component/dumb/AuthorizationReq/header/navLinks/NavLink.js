import React from 'react'
import './navLink.css'

export default function NavLink({ children, ...props}) {
  return (
    <a className='nav-link' {...props}>{children}</a>
  )
}
