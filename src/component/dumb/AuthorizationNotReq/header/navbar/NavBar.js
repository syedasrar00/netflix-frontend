import React from 'react'
import './navbar.css'

function NavBar({ children, ...restProps}) {
  return (
    <div {...restProps}>
        {children}
    </div>
  )
}

export default NavBar
